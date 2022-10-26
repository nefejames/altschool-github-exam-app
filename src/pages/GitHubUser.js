import {
  Box,
  Flex,
  VStack,
  Text,
  Button,
  Spinner,
  chakra,
} from "@chakra-ui/react";
import Card from "../components/Card";
import GitHubUserAnalytics from "../components/GitHubUserAnalytics";
import GitHubUserLinks from "../components/GitHubUserLinks";
import { Link } from "react-router-dom";
import { useGitHubUserContext } from "../context/GitHubUserContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import PlaceholderImage from "../images/placeholder.jpg";

export default function GitHubUser() {
  const data = useGitHubUserContext();
  const ChakraLink = chakra(Link);
  const ChakraLazyLoadImage = chakra(LazyLoadImage);

  if (!data) return <Spinner size="xl" />;

  return (
    <Card>
      <Flex
        display="flex"
        flexDir={["column", "row"]}
        gap={8}
        w={["full", "700px"]}
      >
        <Box width={["full", "300px"]}>
          <ChakraLazyLoadImage
            objectFit="cover"
            height="300"
            borderRadius="lg"
            src={data.avatar_url}
            PlaceholderSrc={PlaceholderImage}
            alt="my image"
            effect="blur"
          />

          <Text as="span" mt={3} display="inline-block" color="teal.900">
            @{data.login}
          </Text>
        </Box>
        <VStack spacing={7} alignItems="start">
          <VStack spacing={5} alignItems="start">
            <VStack>
              <Text
                as="span"
                fontWeight="extrabold"
                fontSize="3xl"
                color="teal.900"
              >
                {data.name}
              </Text>
            </VStack>
            <Text as="p">{data.bio}</Text>
          </VStack>

          <GitHubUserAnalytics
            noOfRepos={data.public_repos}
            noOfFollowers={data.followers}
            noOfFollowing={data.following}
          />

          <GitHubUserLinks webUrl={data.blog} location={data.location} />

          <ChakraLink to="/repos" w="full">
            <Button
              color="white"
              bg="green.900"
              w="full"
              size="lg"
              fontSize="md"
              _hover={{ bg: "green.800" }}
            >
              View my Repos
            </Button>
          </ChakraLink>
        </VStack>
      </Flex>
    </Card>
  );
}
