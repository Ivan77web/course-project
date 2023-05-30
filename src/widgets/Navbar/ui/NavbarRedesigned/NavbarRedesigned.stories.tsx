import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRole } from '@/entities/User';
import { NavbarRedesigned } from './NavbarRedesigned';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'widgets/Navbar/NavbarRedesigned',
    component: NavbarRedesigned,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NavbarRedesigned>;

const Template: ComponentStory<typeof NavbarRedesigned> = (args) => (
    <div className="app_redesigned">
        <NavbarRedesigned {...args} />
    </div>
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator({
        loginForm: { username: '123', password: 'asd' },
    }),
    NewDesignDecorator,
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK), StoreDecorator({
        loginForm: { username: '123', password: 'asd' },
    }),
    NewDesignDecorator,
];

export const Gray = Template.bind({});
Gray.args = {};
Gray.decorators = [
    ThemeDecorator(Theme.GRAY), StoreDecorator({
        loginForm: { username: '123', password: 'asd' },
    }),
    NewDesignDecorator,
];

export const AuthDarkNotAdmin = Template.bind({});
AuthDarkNotAdmin.args = {};
AuthDarkNotAdmin.decorators = [
    ThemeDecorator(Theme.DARK), StoreDecorator({
        loginForm: { username: '123', password: 'asd' },
        user: {
            authData: {
                avatar: 'https://sun9-36.userapi.com/impg/c855220/v855220920/217645/M_4Hrk9SIZ4.jpg?size=723x1080&quality=96&sign=907eeb1184d759743dc91b92133cc94a&type=album',
            },
        },
    }),
    NewDesignDecorator,
];

export const AuthDarkAdmin = Template.bind({});
AuthDarkAdmin.args = {};
AuthDarkAdmin.decorators = [
    ThemeDecorator(Theme.DARK), StoreDecorator({
        loginForm: { username: '123', password: 'asd' },
        user: {
            authData: {
                roles: [UserRole.ADMIN],
                avatar: 'https://sun9-36.userapi.com/impg/c855220/v855220920/217645/M_4Hrk9SIZ4.jpg?size=723x1080&quality=96&sign=907eeb1184d759743dc91b92133cc94a&type=album',
            },
        },
    }),
    NewDesignDecorator,
];
