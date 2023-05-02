import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRole } from '@/entities/User';
import avatar from '@/shared/assets/tests/avatarForStorybook.jpeg';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { AvatarDropdown } from './AvatarDropdown';

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args} />;

export const NormalAdmin = Template.bind({});
NormalAdmin.args = {};
NormalAdmin.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'Ivan',
                avatar,
                roles: [UserRole.ADMIN],
            },
        },
    }),
];

export const DarkAdmin = Template.bind({});
DarkAdmin.args = {};
DarkAdmin.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'Ivan',
                avatar,
                roles: [UserRole.ADMIN],
            },
        },
    }),
    ThemeDecorator(Theme.DARK),
];

export const GrayAdmin = Template.bind({});
GrayAdmin.args = {};
GrayAdmin.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'Ivan',
                avatar,
                roles: [UserRole.ADMIN],
            },
        },
    }),
    ThemeDecorator(Theme.GRAY),
];

export const NormalUser = Template.bind({});
NormalUser.args = {};
NormalUser.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'Ivan',
                avatar,
                roles: [UserRole.USER],
            },
        },
    }),
];

export const DarkUser = Template.bind({});
DarkUser.args = {};
DarkUser.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'Ivan',
                avatar,
                roles: [UserRole.USER],
            },
        },
    }),
    ThemeDecorator(Theme.DARK),
];

export const GrayUser = Template.bind({});
GrayUser.args = {};
GrayUser.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'Ivan',
                avatar,
                roles: [UserRole.USER],
            },
        },
    }),
    ThemeDecorator(Theme.GRAY),
];
