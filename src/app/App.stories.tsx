import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import App from './App';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { UserRole } from '@/entities/User';

export default {
    title: 'App',
    component: App,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'asd' },
})];

export const LightAuth = Template.bind({});
LightAuth.args = {};
LightAuth.decorators = [StoreDecorator({
    user: {
        authData: {
            id: '1',
            username: 'admin',
            roles: [
                UserRole.ADMIN,
            ],
            avatar: 'https://sun9-36.userapi.com/impg/c855220/v855220920/217645/M_4Hrk9SIZ4.jpg?size=723x1080&quality=96&sign=907eeb1184d759743dc91b92133cc94a&type=album',
        },
    },
    loginForm: { username: '123', password: 'asd' },
})];

export const LightRedesigned = Template.bind({});
LightRedesigned.args = {};
LightRedesigned.decorators = [
    StoreDecorator({
        loginForm: { username: '123', password: 'asd' },
    }),
    NewDesignDecorator,
];

export const LightRedesignedAuth = Template.bind({});
LightRedesignedAuth.args = {};
LightRedesignedAuth.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'admin',
                roles: [
                    UserRole.ADMIN,
                ],
                avatar: 'https://sun9-36.userapi.com/impg/c855220/v855220920/217645/M_4Hrk9SIZ4.jpg?size=723x1080&quality=96&sign=907eeb1184d759743dc91b92133cc94a&type=album',
            },
        },
        loginForm: { username: '123', password: 'asd' },
    }),
    NewDesignDecorator,
];
