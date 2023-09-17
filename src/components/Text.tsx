import React, { ReactNode } from "react";

import styled, { css } from "styled-components";

/**
 * styled-components 및 styled interface 정의 영역
 */
const SIZES = {
    sm: css`
        --text-font-size: 10px;
    `,
    md: css`
        --text-font-size: 14px;
    `,
    lg: css`
        --text-font-size: 18px;
    `,
};

const StyledText = styled.span<{ size: "sm" | "md" | "lg"; color?: string }>`
    ${({ size }) => SIZES[size]}
    font-size: var(--text-font-size, 14px);
    color: ${(props) => props.color || "rgba(0, 0, 0, 1)"};
`;

interface TextProps {
    children?: ReactNode;
    size?: "sm" | "md" | "lg";
    color?: string;
}

export const Text = (props: TextProps) => {
    const { children, size, color } = props;
    return (
        <StyledText size={size || "md"} color={color}>
            {children}
        </StyledText>
    );
};
