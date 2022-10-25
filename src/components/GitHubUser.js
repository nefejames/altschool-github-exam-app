import { Box, Flex, Image, VStack, Text } from "@chakra-ui/react";
import GitHubUserAnalytics from "./GitHubUserAnalytics";
import GitHubUserLinks from "./GitHubUserLinks";
import { BsStar } from "react-icons/bs";

export default function GitHubUser() {
  return (
    <Box
      bg="white"
      boxShadow="lg"
      p={10}
      pb="60px"
      borderRadius="md"
      border="2px solid teal.800"
    >
      <Flex
        display="flex"
        flexDir={["column", "row"]}
        gap={8}
        w={["full", "700px"]}
      >
        <Box width={["full", "300px"]}>
          <Image
            boxSize="full"
            objectFit="cover"
            borderRadius="md"
            src="https://randomuser.me/api/portraits/women/45.jpg"
            alt="my image"
          />
          <Text as="span" mt={3} display="inline-block" color="teal.900">
            @nefejames
          </Text>
        </Box>
        <VStack spacing={7}>
          <VStack spacing={5}>
            <VStack>
              <Text
                as="span"
                fontWeight="extrabold"
                fontSize="3xl"
                color="teal.900"
              >
                Emadamerho-Atori Nefe
              </Text>
            </VStack>
            <Text as="p">Awesome Twitter Bio</Text>
          </VStack>

          <GitHubUserAnalytics />

          <GitHubUserLinks />
        </VStack>
      </Flex>
    </Box>
  );
}
