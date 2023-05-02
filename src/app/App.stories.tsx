import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import App from './App';

export default {
    title: 'App',
    component: App,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'asd' },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    loginForm: { username: '123', password: 'asd' },
})];
