import { Box, Button, Flex, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import Repo from "../components/Repo";
import { Link } from "react-router-dom";
import { BsStar } from "react-icons/bs";

export default function Repos() {
  return (
    <Box>
      <SimpleGrid columns={[1, 2]} spacingX="10" spacingY="12">
        {Array.from(Array(6).keys()).map((i) => (
          <Repo key={i} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
