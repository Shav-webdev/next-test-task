declare module "@mui/material/Button" {
    interface ButtonPropsVariantOverrides {
        primary_filled?: true;
        primary_outlined?: true;
        secondary_filled?: true;
        secondary_outlined?: true;
    }
    interface ButtonOwnProps {
        variant?: "primary_filled" | "primary_outlined" | "secondary_filled" | "secondary_outlined";
    }
}
