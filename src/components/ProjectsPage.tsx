import React, { useEffect, useState } from 'react';

interface Repo {
  name: string;
  html_url: string;
  description: string | null;
  primaryLanguage: string; // First language from /languages API
}

const ProjectsPage: React.FC = () => {
  const [sortedRepos, setSortedRepos] = useState<{ [key: string]: Repo[] }>({});
  const [allRepos, setAllRepos] = useState<Repo[]>([]);

  // Fetch languages for each repository
  const fetchRepoLanguages = async (repoName: string): Promise<string> => {
    try {
      const response = await fetch(`https://api.github.com/repos/tinkernerd/${repoName}/languages`);
      const languages = await response.json();
      const languageList = Object.keys(languages);
      return languageList.length > 0 ? languageList[0] : 'Unknown';
    } catch (error) {
      console.error(`Error fetching languages for ${repoName}:`, error);
      return 'Unknown';
    }
  };

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/tinkernerd/repos');
        const data = await response.json();

        const reposWithLanguages = await Promise.all(
          data.map(async (repo: any) => {
            const primaryLanguage = await fetchRepoLanguages(repo.name);
            return {
              name: repo.name,
              html_url: repo.html_url,
              description: repo.description || 'No description available.',
              primaryLanguage,
            };
          })
        );

        // Group repositories by primaryLanguage
        const groupedByLanguage = reposWithLanguages.reduce((acc: { [key: string]: Repo[] }, repo: Repo) => {
          const language = repo.primaryLanguage;
          if (!acc[language]) {
            acc[language] = [];
          }
          acc[language].push(repo);
          return acc;
        }, {});

        setAllRepos(reposWithLanguages);
        setSortedRepos(groupedByLanguage);
      } catch (error) {
        console.error('Error fetching repos:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      <h2>My Projects - Sorted</h2>
      {Object.keys(sortedRepos)
        .sort()
        .map((language) => (
          <div key={language}>
            <h3>{language}</h3>
            <ul>
              {sortedRepos[language].map((repo) => (
                <li key={repo.name}>
                  <strong>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                      {repo.name}
                    </a>
                  </strong>
                  : {repo.description}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default ProjectsPage;
