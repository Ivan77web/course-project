import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text } from './Text';

export default {
    title: 'shared/Text/TextRedesigned',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <div className="app_redesigned"><Text {...args} /></div>;

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
    variant: 'primary',
    text: 'Text lorem ipsum',
};

export const Accent = Template.bind({});
Accent.args = {
    variant: 'accent',
    text: 'Text lorem ipsum',
};

export const Error = Template.bind({});
Error.args = {
    variant: 'error',
    text: 'Text lorem ipsum',
};

export const AlignLeft = Template.bind({});
AlignLeft.args = {
    align: 'left',
    text: 'Text lorem ipsum',
};

export const AlignCenter = Template.bind({});
AlignCenter.args = {
    align: 'center',
    text: 'Text lorem ipsum',
};

export const AlignRight = Template.bind({});
AlignRight.args = {
    align: 'right',
    text: 'Text lorem ipsum',
};

export const S = Template.bind({});
S.args = {
    size: 's',
    text: 'Text lorem ipsum',
};

export const M = Template.bind({});
M.args = {
    size: 'm',
    text: 'Text lorem ipsum',
};

export const L = Template.bind({});
L.args = {
    size: 'l',
    text: 'Text lorem ipsum',
};
