import { ReactNode } from "react";
/**
 * component interface 정의 영역
 */
interface ButtonProps {
    children?: ReactNode;
    disabled?: boolean;
    type?: "submit" | "reset" | "button";
    onClick?: () => void;
    size?: "sm" | "md" | "lg";
    variant?: "solid" | "outline" | "ghost";
    colorScheme?: "blue" | "green" | "red" | "gray";
}
export declare const Button: (props: ButtonProps) => JSX.Element;
export {};
