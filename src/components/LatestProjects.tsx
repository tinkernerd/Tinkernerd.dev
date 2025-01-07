import React, { useEffect, useState } from 'react';

interface Repo {
  name: string;
  html_url: string;
  description: string | null;
}

const LatestProjects: React.FC = () => {
  const [latestRepos, setLatestRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/tinkernerd/repos');
        const data = await response.json();

        // Sort repositories by creation date (descending) and take the latest 3
        const latest = data
          .sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
          .slice(0, 3) // Adjust this number to show more/less projects
          .map((repo: any) => ({
            name: repo.name,
            html_url: repo.html_url,
            description: repo.description || 'No description available.',
          }));

        setLatestRepos(latest);
      } catch (error) {
        console.error('Error fetching repos:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div>
      <h2>Latest Projects</h2>
      <p>Here are a few of my most recent projects:</p>
      <ul>
        {latestRepos.map((repo) => (
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
  );
};

export default LatestProjects;
