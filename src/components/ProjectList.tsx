import React, { useEffect, useState } from 'react';

interface Repo {
  name: string;
  html_url: string;
  description: string | null;
}

const ProjectList: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    // Fetch public repositories from GitHub API
    fetch('https://api.github.com/users/tinkernerd/repos')
      .then((response) => response.json())
      .then((data) => {
        // Map response data to Repo interface
        const formattedRepos = data.map((repo: any) => ({
          name: repo.name,
          html_url: repo.html_url,
          description: repo.description || 'No description available.',
        }));
        setRepos(formattedRepos);
      })
      .catch((error) => console.error('Error fetching repos:', error));
  }, []);

  return (
    <div>
      <h2>My Projects</h2>
      <ul>
        {repos.map((repo) => (
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

      {/* Uncomment this section to add custom projects */}
      {/* 
      <ul>
        <li>
          <strong>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              Custom Project
            </a>
          </strong>
          : A custom project not hosted on GitHub.
        </li>
      </ul>
      */}
    </div>
  );
};

export default ProjectList;
