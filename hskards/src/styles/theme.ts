// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    global: {
        fontFamily: "'Quicksand', 'Noto Sans SC', sans-serif",
    },
    colors: {
        brand: {
            100: "#f7fafc",
            // ...
            900: "#1a202c",
        },
    },
});
