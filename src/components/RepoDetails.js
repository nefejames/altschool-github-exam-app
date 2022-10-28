import {
  Flex,
  Heading,
  HStack,
  Tag,
  VStack,
  Text,
  chakra,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { useGitHubReposContext } from "../context/GitHubReposContext";

const ReactChakraLink = chakra(Link);

export default function RepoDetails({
  stars,
  repoUrl,
  repoName,
  desc,
  progLang,
}) {
  const { repoId } = useParams();
  const data = useGitHubReposContext();

  function getmatchingRepo() {
    const matchingRepo = data.find((repo) => repo.name === repoId);
    return matchingRepo;
  }

  return (
    <Flex
      px={6}
      py={4}
      margin="0 auto"
      bg="white"
      boxShadow="lg"
      borderRadius="md"
      justify="space-between"
      border="1px solid teal.800"
    >
      <ReactChakraLink to={repoUrl} px={6} w={["90%", "450px"]}>
        <VStack spacing={4} alignItems="start">
          <VStack spacing={2} alignItems="start">
            <Heading as="h2" fontSize="lg">
              {repoName}
            </Heading>
            <Text as="p" noOfLines={2}>
              {desc}
            </Text>
          </VStack>

          <HStack spacing={3}>
            {progLang && <Tag colorScheme="green">{progLang}</Tag>}
            <Tag colorScheme="green">
              {stars > 0 ? `Stars: ${stars}` : "No Stars"}
            </Tag>
          </HStack>
        </VStack>

        {/* <a href={repoUrl} target="_blank" rel="noopener noreferrer">
        <FiExternalLink />
      </a> */}
      </ReactChakraLink>
    </Flex>
  );
}
