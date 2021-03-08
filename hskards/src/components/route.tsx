import React from "react";
import { Route as PublicRoute } from "react-router-dom";

interface IRoute {
    path: string;
    component: any;
    routes?: any;
}

export const Route: React.FC<IRoute> = (route: IRoute) => {
    return (
        <PublicRoute
            path={route.path}
            render={(props) => (
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
};
