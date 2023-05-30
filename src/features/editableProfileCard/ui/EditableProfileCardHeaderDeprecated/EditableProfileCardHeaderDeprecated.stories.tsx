import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { EditableProfileCardHeaderDeprecated } from './EditableProfileCardHeaderDeprecated';

export default {
    title: 'features/Profile/EditableProfileCardHeader/EditableProfileCardHeaderDeprecated',
    component: EditableProfileCardHeaderDeprecated,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditableProfileCardHeaderDeprecated>;

const Template: ComponentStory<typeof EditableProfileCardHeaderDeprecated> = (args) => <EditableProfileCardHeaderDeprecated {...args} />;

export const NormalAdmin = Template.bind({});
NormalAdmin.args = {};
NormalAdmin.decorators = [StoreDecorator({
    profile: {
        readonly: false,
        data: {
            id: '1',
            first: 'Ivan',
            lastname: 'Admin',
            age: 20,
            currency: Currency.RUB,
            country: Country.Russia,
            city: 'Moscow',
            username: 'Ivan Ivan',
        },
    },
    user: {
        authData: {
            id: '1',
            username: 'admin',
        },
    },
})];

export const NormalUser = Template.bind({});
NormalUser.args = {};
NormalUser.decorators = [StoreDecorator({
    profile: {
        readonly: false,
        data: {
            id: '1',
            first: 'Ivan',
            lastname: 'Admin',
            age: 20,
            currency: Currency.RUB,
            country: Country.Russia,
            city: 'Moscow',
            username: 'Ivan Ivan',
        },
    },
    user: {
        authData: {
            id: '2',
            username: 'admin',
        },
    },
})];

export const DarkAdmin = Template.bind({});
DarkAdmin.args = {};
DarkAdmin.decorators = [
    StoreDecorator({
        profile: {
            readonly: false,
            data: {
                id: '1',
                first: 'Ivan',
                lastname: 'Admin',
                age: 20,
                currency: Currency.RUB,
                country: Country.Russia,
                city: 'Moscow',
                username: 'Ivan Ivan',
            },
        },
        user: {
            authData: {
                id: '1',
                username: 'admin',
            },
        },
    }),
    ThemeDecorator(Theme.DARK),
];

export const DarkUser = Template.bind({});
DarkUser.args = {};
DarkUser.decorators = [
    StoreDecorator({
        profile: {
            readonly: false,
            data: {
                id: '1',
                first: 'Ivan',
                lastname: 'Admin',
                age: 20,
                currency: Currency.RUB,
                country: Country.Russia,
                city: 'Moscow',
                username: 'Ivan Ivan',
            },
        },
        user: {
            authData: {
                id: '2',
                username: 'admin',
            },
        },
    }),
    ThemeDecorator(Theme.DARK),
];

export const GrayAdmin = Template.bind({});
GrayAdmin.args = {};
GrayAdmin.decorators = [
    StoreDecorator({
        profile: {
            readonly: false,
            data: {
                id: '1',
                first: 'Ivan',
                lastname: 'Admin',
                age: 20,
                currency: Currency.RUB,
                country: Country.Russia,
                city: 'Moscow',
                username: 'Ivan Ivan',
            },
        },
        user: {
            authData: {
                id: '1',
                username: 'admin',
            },
        },
    }),
    ThemeDecorator(Theme.GRAY),
];

export const GrayUser = Template.bind({});
GrayUser.args = {};
GrayUser.decorators = [
    StoreDecorator({
        profile: {
            readonly: false,
            data: {
                id: '1',
                first: 'Ivan',
                lastname: 'Admin',
                age: 20,
                currency: Currency.RUB,
                country: Country.Russia,
                city: 'Moscow',
                username: 'Ivan Ivan',
            },
        },
        user: {
            authData: {
                id: '2',
                username: 'admin',
            },
        },
    }),
    ThemeDecorator(Theme.GRAY),
];
