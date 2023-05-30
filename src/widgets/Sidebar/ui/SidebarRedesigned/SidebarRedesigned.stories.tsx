import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { SidebarRedesigned } from './SidebarRedesigned';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'widgets/Sidebar/SidebarRedesigned',
    component: SidebarRedesigned,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SidebarRedesigned>;

const Template: ComponentStory<typeof SidebarRedesigned> = (args) => (
    <div style={{ height: '100vh' }} className="app_redesigned">
        <SidebarRedesigned {...args} />
    </div>
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator({
        user: { authData: {} },
    }),
    NewDesignDecorator,
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        user: { authData: {} },
    }),
    NewDesignDecorator,
];

export const OptionalBg = Template.bind({});
OptionalBg.args = {};
OptionalBg.decorators = [
    ThemeDecorator(Theme.GRAY),
    StoreDecorator({
        user: { authData: {} },
    }),
    NewDesignDecorator,
];

export const NoAuth = Template.bind({});
NoAuth.args = {};
NoAuth.decorators = [
    StoreDecorator({
        user: {},
    }),
    NewDesignDecorator,
];
