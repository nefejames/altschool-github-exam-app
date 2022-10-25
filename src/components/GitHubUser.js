import { Box, Flex, Image, VStack, Text, Button } from "@chakra-ui/react";
import Card from "./Card";
import GitHubUserAnalytics from "./GitHubUserAnalytics";
import GitHubUserLinks from "./GitHubUserLinks";
import { Link } from "react-router-dom";
import { BsStar } from "react-icons/bs";

export default function GitHubUser() {
  return (
    <Card>
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
          <Button
            color="white"
            bg="green.900"
            w="full"
            size="lg"
            fontSize="md"
            _hover={{ bg: "green.800" }}
          >
            <Link to="/">View my Repos</Link>
          </Button>
        </VStack>
      </Flex>
    </Card>
  );
}
