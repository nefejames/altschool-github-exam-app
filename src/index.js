import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import GitHubUserContextProvider from "./context/GitHubUserContext";
import GitHubReposContextProvider from "./context/GitHubReposContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <GitHubUserContextProvider>
          <GitHubReposContextProvider>
            <App />
          </GitHubReposContextProvider>
        </GitHubUserContextProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
