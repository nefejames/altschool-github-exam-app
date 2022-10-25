import { Flex, Text, VStack } from "@chakra-ui/react";

export default function GitHubUserAnalytics() {
  return (
    <Flex
      justify="space-between"
      bg="green.100"
      borderRadius="lg"
      px={7}
      py={3}
      w={["full", "400px"]}
    >
      <VStack spacing={-1}>
        <Text as="span">Repos</Text>
        <Text as="span" fontWeight="bold" fontSize="xl">
          182
        </Text>
      </VStack>
      <VStack spacing={-1}>
        <Text as="span">Followers</Text>
        <Text as="span" fontWeight="bold" fontSize="xl">
          40
        </Text>
      </VStack>
      <VStack spacing={-1}>
        <Text as="span">Following</Text>
        <Text as="span" fontWeight="bold" fontSize="xl">
          142
        </Text>
      </VStack>
    </Flex>
  );
}
