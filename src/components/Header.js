import { Center, HStack, chakra } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Header() {
  const ChakraLink = chakra(Link);

  return (
    <chakra.header bg="gray.800" w="full" color="#fff">
      <chakra.nav>
        <Center h="60px">
          <HStack spacing={5}>
            <ChakraLink to="/" fontSize="lg">
              Home
            </ChakraLink>
            <ChakraLink to="/github-profile" fontSize="lg">
              My GitHub Profile
            </ChakraLink>
          </HStack>
        </Center>
      </chakra.nav>
    </chakra.header>
  );
}
