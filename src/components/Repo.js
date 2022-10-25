import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  VStack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { FiStar, FiExternalLink } from "react-icons/fi";

export default function Repo() {
  return (
    <Flex
      px={6}
      py={4}
      w={["full", "450px"]}
      bg="white"
      boxShadow="lg"
      borderRadius="md"
      justify="space-between"
      border="1px solid teal.800"
    >
      <VStack spacing={4}>
        <VStack spacing={2}>
          <Heading as="h2" fontSize="lg">
            Altschool-app-cool
          </Heading>
          <Text as="p">A really cool app for AltSchool</Text>
        </VStack>

        <HStack spacing={5} fontSize="sm">
          <span>JavaScript</span>
          <span>Updated 28 mins ago</span>
        </HStack>
      </VStack>

      <HStack spacing={3}>
        <FiStar />
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          <FiExternalLink />
        </a>
      </HStack>
    </Flex>
  );
}
