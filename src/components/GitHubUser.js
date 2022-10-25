import {
  Box,
  Flex,
  Image,
  Stack,
  HStack,
  VStack,
  Text,
} from "@chakra-ui/react";
import { BiLink, BiLocationPlus } from "react-icons/bi";
import { BsStar } from "react-icons/bs";

export default function GitHubUser() {
  return (
    <Box>
      <Flex display="flex" flexDir="row" gap={8} w="800px">
        <Image
          boxSize="200px"
          objectFit="cover"
          borderRadius="md"
          src="https://randomuser.me/api/portraits/women/45.jpg"
          alt="my image"
        />
        <Box>
          <VStack spacing={5}>
            <VStack>
              <Text as="span" fontWeight="extrabold" fontSize="3xl">
                Emadamerho-Atori Nefe
              </Text>
              <Text as="span">@nefejames</Text>
            </VStack>
            <Text as="p">Awesome Twitter Bio</Text>
          </VStack>

          <GitHubUserAnalytics />

          {/* ============= */}
          <HStack spacing={7} mt={10}>
            <HStack spacing={4}>
              <BiLink /> <Text as="span">My portfolio</Text>
            </HStack>
            <HStack>
              <BiLocationPlus />
              <Text as="span">Location, Nigeria portfolio</Text>
            </HStack>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}

function GitHubUserAnalytics() {
  return (
    <Flex
      justify="space-between"
      bg="green.200"
      borderRadius="lg"
      px={7}
      py={3}
      w={["full", "400px"]}
    >
      <VStack>
        <Text as="span">Repo</Text>
        <Text as="span" fontWeight="bold" fontSize="2xl">
          182
        </Text>
      </VStack>
      <VStack>
        <Text as="span">Repo</Text>
        <Text as="span" fontWeight="bold" fontSize="2xl">
          182
        </Text>
      </VStack>
      <VStack>
        <Text as="span">Repo</Text>
        <Text as="span" fontWeight="bold" fontSize="2xl">
          182
        </Text>
      </VStack>
    </Flex>
  );
}
