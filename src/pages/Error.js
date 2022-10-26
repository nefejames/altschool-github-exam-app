import { Text } from "@chakra-ui/react";

export default function Error() {
  throw new Error("error");
  return <Text as="span">An error route</Text>;
}
