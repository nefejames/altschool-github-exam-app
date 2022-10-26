import { Flex, Heading, HStack, Tag, VStack, Text } from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";

export default function Repo({ stars, repoUrl, repoName, desc, progLang }) {
  return (
    <Flex
      px={6}
      py={4}
      w={["90%", "450px"]}
      margin={"0 auto"}
      bg="white"
      boxShadow="lg"
      borderRadius="md"
      justify="space-between"
      border="1px solid teal.800"
    >
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

      <a href={repoUrl} target="_blank" rel="noopener noreferrer">
        <FiExternalLink />
      </a>
    </Flex>
  );
}
