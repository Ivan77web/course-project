import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

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

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Title lorem ipsum',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Text lorem ipsum',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TitleWithTextDark = Template.bind({});
TitleWithTextDark.args = {
    title: 'Title lorem ipsum',
    text: 'Text lorem ipsum',
};
TitleWithTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorTitle = Template.bind({});
ErrorTitle.args = {
    title: 'Title lorem ipsum',
    variant: 'error',
};

export const ErrorText = Template.bind({});
ErrorText.args = {
    text: 'Text lorem ipsum',
    variant: 'error',
};

export const ErrorTitleWithText = Template.bind({});
ErrorTitleWithText.args = {
    title: 'Title lorem ipsum',
    text: 'Text lorem ipsum',
    variant: 'error',
};

export const ErrorTitleDark = Template.bind({});
ErrorTitleDark.args = {
    title: 'Title lorem ipsum',
    variant: 'error',
};
ErrorTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorTextDark = Template.bind({});
ErrorTextDark.args = {
    text: 'Text lorem ipsum',
    variant: 'error',
};
ErrorTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorTitleWithTextDark = Template.bind({});
ErrorTitleWithTextDark.args = {
    title: 'Title lorem ipsum',
    text: 'Text lorem ipsum',
    variant: 'error',
};
ErrorTitleWithTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Title lorem ipsum',
    text: 'Text lorem ipsum',
    size: 's',
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Title lorem ipsum',
    text: 'Text lorem ipsum',
    size: 'm',
};

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Title lorem ipsum',
    text: 'Text lorem ipsum',
    size: 'l',
};
