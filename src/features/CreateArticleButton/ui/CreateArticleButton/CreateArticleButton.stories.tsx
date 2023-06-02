import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CreateArticleButton } from './CreateArticleButton';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'features/Article/CreateArticleButton',
    component: CreateArticleButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CreateArticleButton>;

const Template: ComponentStory<typeof CreateArticleButton> = (args) => (
    <div className="app_redesigned">
        <CreateArticleButton {...args} />
    </div>
);

export const Normal = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const OptionalBg = Template.bind({});
OptionalBg.decorators = [ThemeDecorator(Theme.GRAY)];
