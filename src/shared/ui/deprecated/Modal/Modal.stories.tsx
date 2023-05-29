import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal/ModalDeprecated',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
    children: <p>Modal Window</p>,
    isOpen: true,
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {
    children: <p>Modal Window</p>,
    isOpen: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const OptionalBg = Template.bind({});
OptionalBg.args = {
    children: <p>Modal Window</p>,
    isOpen: true,
};
OptionalBg.decorators = [ThemeDecorator(Theme.GRAY)];
