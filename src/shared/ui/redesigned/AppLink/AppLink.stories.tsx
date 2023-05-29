import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { AppLink } from './AppLink';

export default {
    title: 'shared/AppLink/AppLinkRedesigned',
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
    variant: 'primary',
};

export const Red = Template.bind({});
Red.args = {
    children: 'Text',
    variant: 'red',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Text',
    variant: 'primary',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryRed = Template.bind({});
SecondaryRed.args = {
    children: 'Text',
    variant: 'red',
};
SecondaryRed.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryOptionalBg = Template.bind({});
PrimaryDark.args = {
    children: 'Text',
    variant: 'primary',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.GRAY)];

export const SecondaryOptionalBg = Template.bind({});
SecondaryRed.args = {
    children: 'Text',
    variant: 'red',
};
SecondaryRed.decorators = [ThemeDecorator(Theme.GRAY)];
