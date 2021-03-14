import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

export const Flashcards = () => {
    return (
        <Grid
            h="400px"
            templateRows="repeat(1, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap={1}
        >
            <Box width="50px" bg="tomato" />
            <Box width="100%" bg="tomato" />
        </Grid>
    );
};
