import React, { Suspense } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Switch } from "react-router-dom";
import { ROUTES } from "../config/routes";
import { Route } from "./route";

const GlobalStyle = createGlobalStyle`
    html {
        background-color: #f6f7fb;
    }
`;

const App = () => {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <GlobalStyle />
            <Switch>
                {ROUTES.map((route, i) => (
                    <Route key={i} {...route} />
                ))}
            </Switch>
        </Suspense>
    );
};

export default App;
