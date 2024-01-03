import * as React from "react";
import {cn} from "@/lib/utils";
import {cva} from "class-variance-authority";

const TypographyVariant = [
    "headingLarge", // 48px
    "headingMedium", // 36px
    "headingSmall", // 24px
    "textLarge", // 21px
    "textMedium", // 18px
    "textSmall" // 16px
] as const;
const TypographyColor = [
    "primary",
    "accent",
    "default",
    "error",
    "muted",
    "white"
] as const;
const TypographyThick = [
    "bold",
    "semibold",
    "regular",
    "light",
] as const;

type TypographyProps<T extends React.ElementType> = {
    as?: T;
    className?: string;
    color?: (typeof TypographyColor)[number];
    size?: (typeof TypographyVariant)[number];
    // fontFamily?: (typeof TypographyFont)[number];
    thick?: (typeof TypographyThick)[number];
    children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

type TypographyComponent = <T extends React.ElementType = "p">(
    props: TypographyProps<T>,
) => React.ReactElement | null;

const typographyVariant = cva("leading-none", {
    variants: {
        size: {
            headingLarge: "text-[48px]",
            headingMedium: "text-[36px]",
            headingSmall: "text-[24px]",
            textLarge: "text-[21px]",
            textMedium: "text-[18px]",
            textSmall: "text-[16px]"
        },
        thick: {
            bold: "font-[700]",
            semibold: "font-[600]",
            medium: "font-medium",
            regular: "font-[400]",
            light: "font-light",
        },
        color: {
            default: "text-black",
            muted: "text-muted opacity-50",
            primary: "text-primary",
            accent: "text-accent",
            error: "text-destructive",
            white: "text-white"
        },
        defaultVariant: {
            size: "textM",
            color: "default",
            thick: "regular",
        },
    },
});

//@ts-ignore
// eslint-disable-next-line react/display-name
const Typography: TypographyComponent = React.forwardRef(
    <T extends React.ElementType = "p">(
        {
            as,
            size = "textMedium",
            color = "default",
            thick = "regular",
            className,
            children,
            ...props
        }: TypographyProps<T>,
        ref?: React.ComponentPropsWithRef<T>["ref"],
    ): React.ReactElement | null => {
        const Component = as || "p";

        return (
            <Component
                ref={ref}
                className={cn(
                    typographyVariant({
                        color,
                        thick,
                        size,
                    }),
                    className,
                )}
                {...props}>
                {children}
            </Component>
        );
    },
);

export default Typography;
