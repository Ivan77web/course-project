import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { LangSwitcher } from './LangSwitcher';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'features/LangSwitcher',
    component: LangSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LangSwitcher>;

const Template: ComponentStory<typeof LangSwitcher> = (args) => <LangSwitcher {...args} />;
const TemplateRedesigned: ComponentStory<typeof LangSwitcher> = (args) => (
    <div className="app_redesigned">
        <LangSwitcher {...args} />
    </div>
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const OptionalBg = Template.bind({});
OptionalBg.args = {};
OptionalBg.decorators = [ThemeDecorator(Theme.GRAY)];

export const LightRedesigned = TemplateRedesigned.bind({});
LightRedesigned.args = {};
LightRedesigned.decorators = [NewDesignDecorator];

export const DarkRedesigned = TemplateRedesigned.bind({});
DarkRedesigned.args = {};
DarkRedesigned.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const OptionalBgRedesigned = TemplateRedesigned.bind({});
OptionalBgRedesigned.args = {};
OptionalBgRedesigned.decorators = [NewDesignDecorator, ThemeDecorator(Theme.GRAY)];
