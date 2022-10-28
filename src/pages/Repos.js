import { SimpleGrid, Spinner } from "@chakra-ui/react";
import Repo from "../components/Repo";
import { useGitHubReposContext } from "../context/GitHubReposContext";
import SEO from "../components/SEO";
import { Outlet } from "react-router-dom";

export default function Repos() {
  const data = useGitHubReposContext();

  if (!data) return <Spinner size="xl" />;

  return (
    <>
      <SEO title="My Repos" />

      <SimpleGrid columns={[1, 2]} spacingX="10" spacingY="8" pt={10}>
        {data.map((repo) => (
          <Repo
            key={repo.name}
            stars={repo.stargazers_count}
            repoUrl={repo.name}
            gitHubUrl={repo.html_url}
            repoName={repo.name}
            desc={repo.description}
            progLang={repo.language}
          />
        ))}
      </SimpleGrid>
    </>
  );
}
