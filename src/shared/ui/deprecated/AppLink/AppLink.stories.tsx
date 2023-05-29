import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
    title: 'shared/AppLink/AppLinkDeprecated',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
};

export const Red = Template.bind({});
Red.args = {
    children: 'Text',
    theme: AppLinkTheme.RED,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const RedDark = Template.bind({});
RedDark.args = {
    children: 'Text',
    theme: AppLinkTheme.RED,
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryOptionalBg = Template.bind({});
PrimaryOptionalBg.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
};
PrimaryOptionalBg.decorators = [ThemeDecorator(Theme.GRAY)];

export const SecondaryOptionalBg = Template.bind({});
SecondaryOptionalBg.args = {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
};
SecondaryOptionalBg.decorators = [ThemeDecorator(Theme.GRAY)];

export const RedOptionalBg = Template.bind({});
RedOptionalBg.args = {
    children: 'Text',
    theme: AppLinkTheme.RED,
};
RedOptionalBg.decorators = [ThemeDecorator(Theme.GRAY)];
