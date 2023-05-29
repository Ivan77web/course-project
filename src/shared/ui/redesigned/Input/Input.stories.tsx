import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Input } from './Input';

export default {
    title: 'shared/Input/InputRedesigned',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Light = Template.bind({});
Light.args = {
    placeholder: 'Type text',
    value: '12345',
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {
    placeholder: 'Type text',
    value: '12345',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const OptionalBg = Template.bind({});
OptionalBg.args = {
    placeholder: 'Type text',
    value: '12345',
};
OptionalBg.decorators = [ThemeDecorator(Theme.GRAY)];

export const S = Template.bind({});
S.args = {
    placeholder: 'Type text',
    value: '12345',
    size: 's',
};
S.decorators = [ThemeDecorator(Theme.GRAY)];

export const M = Template.bind({});
M.args = {
    placeholder: 'Type text',
    value: '12345',
    size: 'm',
};
M.decorators = [ThemeDecorator(Theme.GRAY)];

export const L = Template.bind({});
L.args = {
    placeholder: 'Type text',
    value: '12345',
    size: 'l',
};
L.decorators = [ThemeDecorator(Theme.GRAY)];
