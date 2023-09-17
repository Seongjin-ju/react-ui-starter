import { ReactNode } from "react";
interface TextProps {
    children?: ReactNode;
    size?: "sm" | "md" | "lg";
    color?: string;
}
export declare const Text: (props: TextProps) => JSX.Element;
export {};
