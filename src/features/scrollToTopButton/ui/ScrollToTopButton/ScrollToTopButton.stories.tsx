import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ScrollToTopButton } from './ScrollToTopButton';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'features/ScrollToTopButton',
    component: ScrollToTopButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ScrollToTopButton>;

const Template: ComponentStory<typeof ScrollToTopButton> = (args) => (
    <div className="app_redesigned">
        <ScrollToTopButton {...args} />
    </div>
);

export const Normal = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const OptionalBg = Template.bind({});
OptionalBg.decorators = [ThemeDecorator(Theme.GRAY)];
