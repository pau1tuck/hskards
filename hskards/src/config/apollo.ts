import {
    ApolloClient,
    createHttpLink,
    NormalizedCacheObject,
} from "@apollo/client";
import { cache } from "./cache";

const httpLink = createHttpLink({
    uri: "http://localhost:8000/graphql/",
});

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    link: httpLink,
    cache,
});
