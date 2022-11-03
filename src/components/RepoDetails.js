import { useState, useEffect } from "react";
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
import { FiExternalLink } from "react-icons/fi";

export default function RepoDetails() {
  const { repoId } = useParams();
  const [repoData, setRepoData] = useState();
  const [loading, setLoading] = useState(false);

  async function fetchRepoData() {
    setLoading(true);
    const response = await fetch(
      `https://api.github.com/repos/nefejames/${repoId}`
    );
    const data = await response.json();
    setRepoData(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchRepoData();
  }, []);

  if (loading || !repoData) return <Spinner size="xl" />;

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
              {repoData.name}
            </Heading>
            <a
              href={repoData.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink />
            </a>
          </Flex>

          {repoData.description && (
            <Text as="p" noOfLines={1}>
              {repoData.description}
            </Text>
          )}
        </VStack>

        <HStack spacing={3}>
          {repoData.language && (
            <Tag colorScheme="green">{repoData.language}</Tag>
          )}
          <Tag colorScheme="green">
            {repoData.stargazers_count > 0
              ? `Stars: ${repoData.stargazers_count}`
              : "No Stars"}
          </Tag>
        </HStack>
      </VStack>
    </Flex>
  );
}
