const headings = {
    h1: {
        fontFamily: "'Noto Sans Armenian', 'Arial', sans-serif",
        fontSize: "32px",
        lineHeight: "34px",
        letterSpacing: "-0.02em",
    },
    h2: {
        fontFamily: "'Noto Sans Armenian', 'Arial', sans-serif",
        fontSize: "24px",
        lineHeight: "26px",
        letterSpacing: "-0.02em",
    },
    h3: {
        fontFamily: "'Noto Sans Armenian', 'Arial', sans-serif",
        fontSize: "20px",
        lineHeight: "22px",
        letterSpacing: "-0.02em",
    },
    h4: {
        fontFamily: "'Noto Sans Armenian', 'Arial', sans-serif",
        fontSize: "18px",
        lineHeight: "20px",
        letterSpacing: "-0.02em",
    },
    h5: {
        fontFamily: "'Noto Sans Armenian', 'Arial', sans-serif",
        fontSize: "16px",
        lineHeight: "18px",
        letterSpacing: "-0.02em",
    },
    h6: {
        fontFamily: "'Noto Sans Armenian', 'Arial', sans-serif",
        fontSize: "14px",
        lineHeight: "16px",
        letterSpacing: "-0.02em",
    },
    h7: {
        fontFamily: "'Noto Sans Armenian', 'Arial', sans-serif",
        fontSize: "13px",
        lineHeight: "14px",
        letterSpacing: "-0.02em",
    },
    h8: {
        fontFamily: "'Noto Sans Armenian', 'Arial', sans-serif",
        fontSize: "12px",
        lineHeight: "13px",
        letterSpacing: "-0.02em",
    },
};

const paragraphs = {
    p1: {
        fontFamily: "'Noto Sans Armenian', 'Arial', sans-serif",
        fontSize: "32px",
        lineHeight: "34px",
        letterSpacing: "-0.02em",
    },
    p2: {
        fontFamily: "'Noto Sans Armenian', 'Arial', sans-serif",
        fontSize: "24px",
        lineHeight: "26px",
        letterSpacing: "-0.02em",
    },
    p3: {
        fontFamily: "'Noto Sans Armenian', 'Arial', sans-serif",
        fontSize: "20px",
        lineHeight: "22px",
        letterSpacing: "-0.02em",
    },
    p4: {
        fontFamily: "'Noto Sans Armenian', 'Arial', sans-serif",
        fontSize: "18px",
        lineHeight: "20px",
        letterSpacing: "-0.02em",
    },
    p5: {
        fontFamily: "'Noto Sans Armenian', 'Arial', sans-serif",
        fontSize: "16px",
        lineHeight: "18px",
        letterSpacing: "-0.02em",
    },
    p6: {
        fontFamily: "'Noto Sans Armenian', 'Arial', sans-serif",
        fontSize: "14px",
        lineHeight: "16px",
        letterSpacing: "-0.02em",
    },
    p7: {
        fontFamily: "'Noto Sans Armenian', 'Arial', sans-serif",
        fontSize: "13px",
        lineHeight: "14px",
        letterSpacing: "-0.02em",
    },
    p8: {
        fontFamily: "'Noto Sans Armenian', 'Arial', sans-serif",
        fontSize: "12px",
        lineHeight: "13px",
        letterSpacing: "-0.02em",
    },
};

export default {
    h1_bold: {
        ...headings.h1,
        fontWeight: 700,
    },
    h2_bold: {
        ...headings.h2,
        fontWeight: 700,
    },
    h3_bold: {
        ...headings.h3,
        fontWeight: 700,
    },
    h4_bold: {
        ...headings.h4,
        fontWeight: 700,
    },
    h5_bold: {
        ...headings.h5,
        fontWeight: 700,
    },
    h6_bold: {
        ...headings.h6,
        fontWeight: 700,
    },
    h7_bold: {
        ...headings.h7,
        fontWeight: 700,
    },
    h8_bold: {
        ...headings.h8,
        fontWeight: 700,
    },
    h1_semibold: {
        ...headings.h1,
        fontWeight: 600,
    },
    h2_semibold: {
        ...headings.h2,
        fontWeight: 600,
    },
    h3_semibold: {
        ...headings.h3,
        fontWeight: 600,
    },
    h4_semibold: {
        ...headings.h4,
        fontWeight: 600,
    },
    h5_semibold: {
        ...headings.h5,
        fontWeight: 600,
    },
    h6_semibold: {
        ...headings.h6,
        fontWeight: 600,
    },
    h7_semibold: {
        ...headings.h7,
        fontWeight: 600,
    },
    h8_semibold: {
        ...headings.h8,
        fontWeight: 600,
    },
    p1_medium: {
        ...paragraphs.p1,
        fontWeight: 500,
    },
    p2_medium: {
        ...paragraphs.p2,
        fontWeight: 500,
    },
    p3_medium: {
        ...paragraphs.p3,
        fontWeight: 500,
    },
    p4_medium: {
        ...paragraphs.p4,
        fontWeight: 500,
    },
    p5_medium: {
        ...paragraphs.p5,
        fontWeight: 500,
    },
    p6_medium: {
        ...paragraphs.p6,
        fontWeight: 500,
    },
    p7_medium: {
        ...paragraphs.p7,
        fontWeight: 500,
    },
    p8_medium: {
        ...paragraphs.p8,
        fontWeight: 500,
    },
    p1_regular: {
        ...paragraphs.p1,
        fontWeight: 400,
    },
    p2_regular: {
        ...paragraphs.p2,
        fontWeight: 400,
    },
    p3_regular: {
        ...paragraphs.p3,
        fontWeight: 400,
    },
    p4_regular: {
        ...paragraphs.p4,
        fontWeight: 400,
    },
    p5_regular: {
        ...paragraphs.p5,
        fontWeight: 400,
    },
    p6_regular: {
        ...paragraphs.p6,
        fontWeight: 400,
    },
    p7_regular: {
        ...paragraphs.p7,
        fontWeight: 400,
    },
    p8_regular: {
        ...paragraphs.p8,
        fontWeight: 400,
    },
    main_button: {
        fontFamily: "'Noto Sans Armenian', 'Arial', sans-serif",
        fontSize: "16px",
        lineHeight: "16px",
        letterSpacing: "-0.02em",
        fontWeight: 500,
    },
    small_button: {
        fontFamily: "'Noto Sans Armenian', 'Arial', sans-serif",
        fontSize: "14px",
        lineHeight: "14px",
        letterSpacing: "-0.02em",
        fontWeight: 500,
    },
} as ITypographyVariants;

export type TTypographyNames =
    | "h1_bold"
    | "h2_bold"
    | "h3_bold"
    | "h4_bold"
    | "h5_bold"
    | "h6_bold"
    | "h7_bold"
    | "h8_bold"
    | "h1_semibold"
    | "h2_semibold"
    | "h3_semibold"
    | "h4_semibold"
    | "h5_semibold"
    | "h6_semibold"
    | "h7_semibold"
    | "h8_semibold"
    | "p1_medium"
    | "p2_medium"
    | "p3_medium"
    | "p4_medium"
    | "p5_medium"
    | "p6_medium"
    | "p7_medium"
    | "p8_medium"
    | "p1_regular"
    | "p2_regular"
    | "p3_regular"
    | "p4_regular"
    | "p5_regular"
    | "p6_regular"
    | "p7_regular"
    | "p8_regular"
    | "main_button"
    | "small_button";

type ITypographyVariants = {
    [key in TTypographyNames]: {
        fontFamily: string;
        fontSize: string;
        lineHeight: string;
        letterSpacing: string;
        fontWeight: number;
    };
};
