import { HStack, Text } from "@chakra-ui/react";
import { BiLink, BiLocationPlus } from "react-icons/bi";

export default function GitHubUserLinks({ webUrl, location }) {
  return (
    <HStack spacing={8}>
      <a href={webUrl} target="_blank" rel="noopener noreferrer">
        <HStack>
          <BiLink />
          <Text as="span">My portfolio</Text>
        </HStack>
      </a>
      <HStack>
        <BiLocationPlus />
        <Text as="span">{location}</Text>
      </HStack>
    </HStack>
  );
}
