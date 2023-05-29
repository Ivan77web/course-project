import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {
    Text, TextAlign, TextSize, TextTheme,
} from './Text';

export default {
    title: 'shared/Text/TextDeprecated',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Light = Template.bind({});
Light.args = {
    title: 'Title lorem ipsum',
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {
    title: 'Title lorem ipsum',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const OptionalBg = Template.bind({});
OptionalBg.args = {
    title: 'Title lorem ipsum',
};
OptionalBg.decorators = [ThemeDecorator(Theme.GRAY)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title lorem ipsum',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Text lorem ipsum',
};

export const TitleWithText = Template.bind({});
TitleWithText.args = {
    title: 'Title lorem ipsum',
    text: 'Text lorem ipsum',
};

export const Primary = Template.bind({});
Primary.args = {
    theme: TextTheme.PRIMARY,
    text: 'Text lorem ipsum',
};

export const Inverted = Template.bind({});
Inverted.args = {
    theme: TextTheme.INVERTED,
    text: 'Text lorem ipsum',
};

export const Error = Template.bind({});
Error.args = {
    theme: TextTheme.ERROR,
    text: 'Text lorem ipsum',
};

export const AlignLeft = Template.bind({});
AlignLeft.args = {
    align: TextAlign.LEFT,
    text: 'Text lorem ipsum',
};

export const AlignCenter = Template.bind({});
AlignCenter.args = {
    align: TextAlign.CENTER,
    text: 'Text lorem ipsum',
};

export const AlignRight = Template.bind({});
AlignRight.args = {
    align: TextAlign.RIGHT,
    text: 'Text lorem ipsum',
};

export const S = Template.bind({});
S.args = {
    size: TextSize.S,
    text: 'Text lorem ipsum',
};

export const M = Template.bind({});
M.args = {
    size: TextSize.M,
    text: 'Text lorem ipsum',
};

export const L = Template.bind({});
L.args = {
    size: TextSize.L,
    text: 'Text lorem ipsum',
};
