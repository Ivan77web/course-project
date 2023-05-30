import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ThemeSwitcher } from './ThemeSwitcher';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;
const TemplateRedesigned: ComponentStory<typeof ThemeSwitcher> = (args) => (
    <div className="app_redesigned">
        <ThemeSwitcher {...args} />
    </div>
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({}),
];

export const OptionalBg = Template.bind({});
OptionalBg.args = {};
OptionalBg.decorators = [
    StoreDecorator({}),
    ThemeDecorator(Theme.GRAY),
];

export const LightRedesigned = TemplateRedesigned.bind({});
LightRedesigned.args = {};
LightRedesigned.decorators = [
    NewDesignDecorator,
    StoreDecorator({}),
];

export const DarkRedesigned = TemplateRedesigned.bind({});
DarkRedesigned.args = {};
DarkRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
    StoreDecorator({}),
];

export const OptionalBgRedesigned = TemplateRedesigned.bind({});
OptionalBgRedesigned.args = {};
OptionalBgRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.GRAY),
    StoreDecorator({}),
];
