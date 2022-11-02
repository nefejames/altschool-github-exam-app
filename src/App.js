import { Routes, Route } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import GitHubUser from "./pages/GitHubUser";
import Home from "./pages/Home";
import NotFound from "./pages/404";
import Header from "./components/Header";
import Repos from "./pages/Repos";
import Error from "./pages/Error";
import SEO from "./components/SEO";
import RepoDetails from "./components/RepoDetails";

function App() {
  return (
    <>
      <SEO title="My GitHub App" />
      <Header />
      <Flex
        justify="center"
        alignItems="center"
        as="main"
        bg="gray.100"
        minH="90vh"
      >
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route path="/github-profile" element={<GitHubUser />} />
            <Route path="repos" element={<Repos />} />
            <Route path="repos/:repoId" element={<RepoDetails />} />
          </Route>

          <Route path="/error" element={<Error />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Flex>
    </>
  );
}

export default App;
