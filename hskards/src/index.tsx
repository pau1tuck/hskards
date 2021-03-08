import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";
import "./styles/global.css";
import App from "./components/_app";

ReactDOM.render(
    <ChakraProvider theme={theme}>
        <HashRouter>
            <App />
        </HashRouter>
    </ChakraProvider>,
    document.getElementById("root")
);
