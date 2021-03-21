import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./config/apollo";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";
// import "./styles/global.css";
import App from "./components/_app";

ReactDOM.render(
    <ApolloProvider client={client}>
        <ChakraProvider theme={theme}>
            <HashRouter>
                <App />
            </HashRouter>
        </ChakraProvider>
    </ApolloProvider>,
    document.getElementById("root")
);
