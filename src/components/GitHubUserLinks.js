import { HStack, Text } from "@chakra-ui/react";
import { BiLink, BiLocationPlus } from "react-icons/bi";

export default function GitHubUserLinks() {
  return (
    <HStack spacing={7}>
      <HStack spacing={4}>
        <BiLink /> <Text as="span">My portfolio</Text>
      </HStack>
      <HStack>
        <BiLocationPlus />
        <Text as="span">Lagos, Nigeria</Text>
      </HStack>
    </HStack>
  );
}
