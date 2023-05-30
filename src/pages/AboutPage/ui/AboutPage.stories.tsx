import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import AboutPage from './AboutPage';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;
const TemplateRedesigned: ComponentStory<typeof AboutPage> = () => (
    <div className="app_redesigned">
        <AboutPage />
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
