import { Box } from "@chakra-ui/react";

export default function Card({ children }) {
  return (
    <Box
      bg="white"
      boxShadow="lg"
      p={10}
      pb="60px"
      borderRadius="lg"
      border="2px solid teal.800"
    >
      {children}
    </Box>
  );
}
