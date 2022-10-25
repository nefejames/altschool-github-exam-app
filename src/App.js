import { Routes, Route } from "react-router-dom";
import { Box, Center } from "@chakra-ui/react";
import GitHubUser from "./components/GitHubUser";
import Home from "./pages/Home";
import NotFound from "./pages/404";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Center mt={[20, 10]} as="main">
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route path="/github-user" element={<GitHubUser />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Center>
    </>
  );
}

export default App;
