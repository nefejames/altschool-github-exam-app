import { createContext, useContext, useEffect, useState } from "react";

const GitHubContext = createContext();
export const useGitHubContext = () => useContext(GitHubContext);

export default function GitHubContextProvider({ children }) {
  const [GitHubData, setGitHubData] = useState(false);

  async function fetchGitHubData() {
    const response = await fetch(`https://api.github.com/users/nefejames`);
    const data = await response.json();
    setGitHubData(data);
  }

  useEffect(() => {
    fetchGitHubData();
  }, []);

  const data = GitHubData;

  return (
    <GitHubContext.Provider value={data}>{children}</GitHubContext.Provider>
  );
}
