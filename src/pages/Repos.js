import { SimpleGrid } from "@chakra-ui/react";
import Repo from "../components/Repo";

export default function Repos() {
  return (
    <SimpleGrid columns={[1, 2]} spacingX="10" spacingY="12">
      {Array.from(Array(6).keys()).map((i) => (
        <Repo key={i} />
      ))}
    </SimpleGrid>
  );
}
