import { createContext, useContext, useEffect, useState } from "react";

const GitHubReposContext = createContext();
export const useGitHubReposContext = () => useContext(GitHubReposContext);

export default function GitHubReposContextProvider({ children }) {
  const [GitHubReposData, setGitHubReposData] = useState([]);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalNoOfPages = 5;

  async function fetchGitHubReposData() {
    setLoading(true);
    const response = await fetch(
      `https://api.github.com/users/nefejames/repos`
    );
    const data = await response.json();
    setGitHubReposData(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchGitHubReposData();
  }, []);

  const getPaginationData = (arr, currentPage = 1, reposPerPage) => {
    const start = currentPage * reposPerPage - reposPerPage;
    const data = [...arr].splice(start, reposPerPage);
    return data;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const prevPage = () => {
    if (currentPage === 1) {
      return;
    }

    setCurrentPage((prev) => prev - 1);
  };

  const nextPage = () => {
    if (currentPage >= totalNoOfPages) {
      return;
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const filteredRepos = getPaginationData(GitHubReposData, currentPage, 6);

  const data = {
    filteredRepos,
    prevPage,
    nextPage,
    handlePageChange,
    totalNoOfPages,
    currentPage,
    GitHubReposData,
    loading,
  };

  return (
    <GitHubReposContext.Provider value={data}>
      {children}
    </GitHubReposContext.Provider>
  );
}
