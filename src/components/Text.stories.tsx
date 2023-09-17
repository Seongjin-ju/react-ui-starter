import React from "react";
import { Text } from "./Text";

import { ComponentMeta } from "@storybook/react";

export default {
    title: "Example/Text",
    component: Text,
    parameters: {
        layout: "fullscreen",
    },
} as ComponentMeta<typeof Text>;

const STORY_TEXT = "TEXT 컴포넌트 테스트";

export const Default = () => <Text>{STORY_TEXT}</Text>;

export const RedHex = () => <Text color="#ff0000">{STORY_TEXT}</Text>;
export const RedRgba = () => <Text color="rgba(255,0,0,1)">{STORY_TEXT}</Text>;

export const smSize = () => <Text size="sm">{STORY_TEXT}</Text>;
export const lgSize = () => <Text size="lg">{STORY_TEXT}</Text>;
