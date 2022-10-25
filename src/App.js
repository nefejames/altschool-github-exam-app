import { Routes, Route } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import GitHubUser from "./pages/GitHubUser";
import Home from "./pages/Home";
import NotFound from "./pages/404";
import Header from "./components/Header";
import Repos from "./pages/Repos";

function App() {
  return (
    <>
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
          </Route>
          <Route path="/repos" element={<Repos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Flex>
    </>
  );
}

export default App;
