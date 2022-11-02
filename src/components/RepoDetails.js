import {
  Flex,
  Heading,
  HStack,
  Tag,
  VStack,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useGitHubReposContext } from "../context/GitHubReposContext";
import { FiExternalLink } from "react-icons/fi";

export default function RepoDetails() {
  const { repoId } = useParams();
  const data = useGitHubReposContext();

  function getMatchingRepo() {
    const matchingRepo = data.filteredRepos.find(
      (repo) => repo.name === repoId
    );
    return matchingRepo;
  }

  console.log(getMatchingRepo());
  console.log(repoId);
  console.log(data.filteredRepos);

  const repo = getMatchingRepo();

  if (data.loading) return <Spinner size="xl" />;

  return (
    <Flex
      px={6}
      py={4}
      w={["90%", "450px"]}
      margin="0 auto"
      bg="white"
      boxShadow="lg"
      borderRadius="md"
      justify="space-between"
    >
      <VStack spacing={4} alignItems="start" w="full">
        <VStack spacing={2} alignItems="start" w="full">
          <Flex justify="space-between" w="full">
            <Heading as="h2" fontSize="lg">
              {repo.name}
            </Heading>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <FiExternalLink />
            </a>
          </Flex>

          {repo.description && (
            <Text as="p" noOfLines={1}>
              {repo.description}
            </Text>
          )}
        </VStack>

        <HStack spacing={3}>
          {repo.language && <Tag colorScheme="green">{repo.language}</Tag>}
          <Tag colorScheme="green">
            {repo.stargazers_count > 0
              ? `Stars: ${repo.stargazers_count}`
              : "No Stars"}
          </Tag>
        </HStack>
      </VStack>
    </Flex>
  );
}
