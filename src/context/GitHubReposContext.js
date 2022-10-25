import { createContext, useContext, useEffect, useState } from "react";

const GitHubReposContext = createContext();
export const useGitHubReposContext = () => useContext(GitHubReposContext);

export default function GitHubReposContextProvider({ children }) {
  const [GitHubReposData, setGitHubReposData] = useState(false);

  async function fetchGitHubReposData() {
    const response = await fetch(
      `https://api.github.com/users/nefejames/repos`
    );
    const data = await response.json();
    setGitHubReposData(data);
  }

  useEffect(() => {
    fetchGitHubReposData();
  }, []);

  const data = GitHubReposData;

  return (
    <GitHubReposContext.Provider value={data}>
      {children}
    </GitHubReposContext.Provider>
  );
}
