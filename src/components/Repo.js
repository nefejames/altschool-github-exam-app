import { Flex, Heading, HStack, Tag, VStack } from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Repo({ stars, repoName, progLang }) {
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
            <Link to={`${repoName}`} target="_blank" rel="noopener noreferrer">
              <FiExternalLink />
            </Link>
          </Flex>
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
