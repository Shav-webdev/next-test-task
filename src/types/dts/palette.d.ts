import "@mui/material";

declare module "@mui/material" {
    interface Color {
        main?: string;
    }

    interface PaletteColor {
        main?: string;
        50?: string;
        100?: string;
        200?: string;
        300?: string;
        400?: string;
        500?: string;
        600?: string;
        700?: string;
        800?: string;
        900?: string;
    }

    interface Palette {
        primary: PaletteColor;
        secondary: PaletteColor;
        error: PaletteColor;
        success: PaletteColor;
        highlight: string;
        border: string;
    }

    interface PaletteOptions {
        primary: PaletteColorOptions;
        secondary: PaletteColorOptions;
        grey: PaletteColorOptions;
        error: PaletteColorOptions;
        success: PaletteColorOptions;
        highlight: string;
        border: string;
    }

    interface Theme {
        palette: Palette;
    }

    function useTheme<T = Theme>(): T;
}
