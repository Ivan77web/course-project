import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { UserRole } from '@/entities/User';
import avatar from '@/shared/assets/tests/avatarForStorybook.jpeg';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { AvatarDropdown } from './AvatarDropdown';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args} />;
const TemplateRedesigned: ComponentStory<typeof AvatarDropdown> = (args) => <div className="app_redesigned"><AvatarDropdown {...args} /></div>;

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

export const NormalAdminRedesigned = TemplateRedesigned.bind({});
NormalAdminRedesigned.args = {};
NormalAdminRedesigned.decorators = [
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
    NewDesignDecorator,
];

export const DarkAdminRedesigned = TemplateRedesigned.bind({});
DarkAdminRedesigned.args = {};
DarkAdminRedesigned.decorators = [
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
    NewDesignDecorator,
];

export const GrayAdminRedesigned = TemplateRedesigned.bind({});
GrayAdminRedesigned.args = {};
GrayAdminRedesigned.decorators = [
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
    NewDesignDecorator,
];

export const NormalUserRedesigned = TemplateRedesigned.bind({});
NormalUserRedesigned.args = {};
NormalUserRedesigned.decorators = [
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
    NewDesignDecorator,
];

export const DarkUserRedesigned = TemplateRedesigned.bind({});
DarkUserRedesigned.args = {};
DarkUserRedesigned.decorators = [
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
    NewDesignDecorator,
];

export const GrayUserRedesigned = TemplateRedesigned.bind({});
GrayUserRedesigned.args = {};
GrayUserRedesigned.decorators = [
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
    NewDesignDecorator,
];
