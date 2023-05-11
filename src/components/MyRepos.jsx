import { useState, useEffect } from 'react';

const MyRepos = ({ username, token }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Authorization: `token ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data);
        } else {
          console.error('Error fetching repos:', data);
        }
      })
      .catch(console.error);
  }, [username, token]);

  return (
    <div>
      <h2>My GitHub Repositories</h2>
      {repos.map((repo) => (
        <div key={repo.id}>
          <h3>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </h3>
          <p>{repo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MyRepos;
