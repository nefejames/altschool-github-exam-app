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

export default function RepoDetails({
  stars = "8",
  repoUrl = "https://hoogle.com",
  repoName = "a repo",
  desc = "a great repoooo",
  progLang = "Go",
}) {
  const { repoId } = useParams();
  const data = useGitHubReposContext();

  function getmatchingRepo() {
    const matchingRepo = data.filteredRepos.find((repo) => repo.name == repoId);
    return matchingRepo;
  }

  console.log(getmatchingRepo());
  console.log(repoId);
  console.log(data.filteredRepos);

  const repo = getmatchingRepo();

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
              {repoName}
            </Heading>
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              <FiExternalLink />
            </a>
          </Flex>

          {desc && (
            <Text as="p" noOfLines={1}>
              {desc}
            </Text>
          )}
        </VStack>

        <HStack spacing={3}>
          {progLang && <Tag colorScheme="green">{progLang}</Tag>}
          <Tag colorScheme="green">
            {stars > 0 ? `Stars: ${stars}` : "No Stars"}
          </Tag>
        </HStack>
      </VStack>
    </Flex>
  );
}
