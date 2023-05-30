import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginFormRedesigned from './LoginFormRedesigned';

export default {
    title: 'features/LoginForm/LoginFormRedesigned',
    component: LoginFormRedesigned,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginFormRedesigned>;

const Template: ComponentStory<typeof LoginFormRedesigned> = (args) => <div className="app_redesigned"><LoginFormRedesigned {...args} /></div>;

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

export const OptionalBg = Template.bind({});
OptionalBg.args = {};
OptionalBg.decorators = [ThemeDecorator(Theme.GRAY), StoreDecorator({
    loginForm: { username: '123', password: 'asd' },
})];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'asd', error: 'ERROR' },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'asd', isLoading: true },
})];
