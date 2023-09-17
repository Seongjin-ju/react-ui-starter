import React from "react";
import { Button } from "./Button";

import { ComponentMeta } from "@storybook/react";

export default {
    title: "Example/Button",
    component: Button,
    parameters: {
        layout: "fullscreen",
    },
} as ComponentMeta<typeof Button>;

const STORY_TEXT = "버튼 테스트";

export const Default = () => <Button>기본버튼</Button>;

export const SolidButton = () => <Button variant="solid">solid 버튼</Button>;
export const OutLineButton = () => <Button variant="outline">outline 버튼</Button>;

export const BlueButton = () => <Button colorScheme="blue">blue 버튼</Button>;
export const GreenButton = () => <Button colorScheme="green">green 버튼</Button>;
export const RedButton = () => <Button colorScheme="red">red 버튼</Button>;
export const GrayButton = () => <Button colorScheme="gray">gray 버튼</Button>;

export const SmButton = () => <Button size="sm">sm 버튼</Button>;
export const MdButton = () => <Button size="md">md 버튼</Button>;
export const LgButton = () => <Button size="lg">lg 버튼</Button>;
