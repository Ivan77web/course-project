import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import MainPage from './MainPage';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;
const TemplateRedesigned: ComponentStory<typeof MainPage> = () => (
    <div className="app_redesigned">
        <MainPage />
    </div>
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    scrollSave: {
        scroll: {
            '': 0,
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    scrollSave: {
        scroll: {
            '': 0,
        },
    },
})];

export const Gray = Template.bind({});
Gray.args = {};
Gray.decorators = [ThemeDecorator(Theme.GRAY), StoreDecorator({
    scrollSave: {
        scroll: {
            '': 0,
        },
    },
})];

export const LightRedesigned = TemplateRedesigned.bind({});
LightRedesigned.args = {};
LightRedesigned.decorators = [
    StoreDecorator({
        scrollSave: {
            scroll: {
                '': 0,
            },
        },
    }),
    NewDesignDecorator,
];

export const DarkRedesigned = TemplateRedesigned.bind({});
DarkRedesigned.args = {};
DarkRedesigned.decorators = [
    ThemeDecorator(Theme.DARK), StoreDecorator({
        scrollSave: {
            scroll: {
                '': 0,
            },
        },
    }),
    NewDesignDecorator,
];

export const GrayRedesigned = TemplateRedesigned.bind({});
GrayRedesigned.args = {};
GrayRedesigned.decorators = [
    ThemeDecorator(Theme.GRAY), StoreDecorator({
        scrollSave: {
            scroll: {
                '': 0,
            },
        },
    }),
    NewDesignDecorator,
];
