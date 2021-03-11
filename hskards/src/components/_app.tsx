import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import { ROUTES } from "../config/routes";
import { Route } from "./route";

const App = () => {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <Switch>
                {ROUTES.map((route, i) => (
                    <Route key={i} {...route} />
                ))}
            </Switch>
        </Suspense>
    );
};

export default App;
