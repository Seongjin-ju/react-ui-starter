import React, { ReactNode } from "react";

import styled, { css } from "styled-components";

/**
 * styled-components 및 styled interface 정의 영역
 */
const SIZES = {
    sm: css`
        --button-font-size: 12px;
        --button-padding: 6px 12px;
    `,
    md: css`
        --button-font-size: 14px;
        --button-padding: 8px 16px;
    `,
    lg: css`
        --button-font-size: 16px;
        --button-padding: 10px 20px;
    `,
};

const VARIANTS = {
    solid: css`
        --button-color: #fafafa;
        --button-bg-color: #0f7acb;
        --button-hover-bg-color: #28acfc;
    `,
    outline: css`
        --button-color: #0f7acb;
        --button-bg-color: transparent;
        --button-border: 1px solid #9da2a6;
        --button-hover-color: #0f7acb;
        --button-hover-bg-color: #28acfc1a;
    `,
    ghost: css`
        --button-color: #0f7acb;
        --button-bg-color: transparent;
        --button-hover-color: #28acfc;
        --button-hover-bg-color: transparent;
    `,
};

const COLOR_SOLID = {
    blue: css`
        --button-color: #fafafa;
        --button-bg-color: #0f7acb;
        --button-hover-bg-color: #28acfc;
    `,
    green: css`
        --button-color: #fafafa;
        --button-bg-color: #00725b;
        --button-hover-bg-color: #00b38c;
    `,
    red: css`
        --button-color: #fafafa;
        --button-bg-color: #fd4547;
        --button-hover-bg-color: #ff8b8d;
    `,
    gray: css`
        --button-color: #fafafa;
        --button-bg-color: #4a4f54;
        --button-hover-bg-color: #61666b;
    `,
};

const COLOR_OUTLINE = {
    blue: css`
        --button-color: #0f7acb;
        --button-hover-color: #0f7acb;
        --button-hover-bg-color: #28acfc1a;
    `,
    green: css`
        --button-color: #00725b;
        --button-hover-color: #00725b;
        --button-hover-bg-color: #00b38c1a;
    `,
    red: css`
        --button-color: #fd4547;
        --button-hover-color: #fd4547;
        --button-hover-bg-color: #ff8b8d1a;
    `,
    gray: css`
        --button-color: #4a4f54;
        --button-hover-color: #4a4f54;
        --button-hover-bg-color: #61666b1a;
    `,
};

const COLOR_GHOST = {
    blue: css`
        --button-color: #0f7acb;
        --button-hover-color: #28acfc;
    `,
    green: css`
        --button-color: #00725b;
        --button-hover-color: #00b38c;
    `,
    red: css`
        --button-color: #fd4547;
        --button-hover-color: #ff8b8d;
    `,
    gray: css`
        --button-color: #4a4f54;
        --button-hover-color: #61666b;
    `,
};

const StyledButton = styled.button<{
    size: "sm" | "md" | "lg";
    variant: "solid" | "outline" | "ghost";
    colorScheme: "blue" | "green" | "red" | "gray";
}>`
    ${({ size }) => SIZES[size]}
    ${({ variant }) => VARIANTS[variant]}
    ${({ variant, colorScheme }) => variant === "solid" && COLOR_SOLID[colorScheme]}
    ${({ variant, colorScheme }) => variant === "outline" && COLOR_OUTLINE[colorScheme]}
    ${({ variant, colorScheme }) => variant === "ghost" && COLOR_GHOST[colorScheme]}

    display: inline-block;
    box-sizing: border-box;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    position: relative;
    border-radius: 0;
    min-width: 60px;
    margin: 4px;
    cursor: pointer;
    font-size: var(--button-font-size, 14px);
    padding: var(--button-padding, 12px 16px);
    color: var(--button-color, #fafafa);
    background: var(--button-bg-color, #0f7acb);
    border: var(--button-border, none);

    &:active,
    &:hover,
    &:focus {
        color: var(--button-hover-color, #fafafa);
        background: var(--button-hover-bg-color, #28acfc);
    }

    &:disabled {
        opacity: 0.5;
        pointer-events: none;
    }
`;

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

export const Button = (props: ButtonProps): JSX.Element => {
    const { children, disabled, type, onClick, variant, colorScheme, size } = props;
    return (
        <StyledButton
            disabled={disabled || false}
            type={type || "button"}
            onClick={onClick && (() => onClick())}
            size={size || "md"}
            variant={variant || "solid"}
            colorScheme={colorScheme || "blue"}
        >
            {children}
        </StyledButton>
    );
};
