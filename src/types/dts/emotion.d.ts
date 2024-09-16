import "@emotion/react";
import "@mui/material";
import { Theme as IMuiTheme } from "@mui/material";

declare module "@emotion/react" {
    export interface Theme extends IMuiTheme {
        palette: Palette;
    }
}
