import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ProfilePage from './ProfilePage';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
    parameters: {
        mockData: [
            {
                url: `${__API__}/profile-ratings?userId=1&profileId=2`,
                method: 'GET',
                status: 200,
                response: [
                    {
                        rate: 2,
                    },
                ],
            },
        ],
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;
const TemplateRedesigned: ComponentStory<typeof ProfilePage> = () => (
    <div className="app_redesigned">
        <ProfilePage />
    </div>
);

const dataUser = {
    id: '1',
    first: 'Ivan',
    lastname: 'Admin',
    age: 20,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Moscow',
    username: 'Ivan Ivan',
};

const defaultDataProfile = {
    readonly: true,
    data: dataUser,
    form: dataUser,
    error: undefined,
    isLoading: false,
};

const defaultUserData = {
    authData: {
        id: '1',
        username: 'admin',
    },
};

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator({
        scrollSave: {
            scroll: {
                '': 0,
            },
        },
        profile: defaultDataProfile,
        user: defaultUserData,
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    StoreDecorator({
        scrollSave: {
            scroll: {
                '': 0,
            },
        },
        profile: defaultDataProfile,
        user: defaultUserData,
    }),
    ThemeDecorator(Theme.DARK),
];

export const OptionalBg = Template.bind({});
OptionalBg.args = {};
OptionalBg.decorators = [
    StoreDecorator({
        scrollSave: {
            scroll: {
                '': 0,
            },
        },
        profile: defaultDataProfile,
        user: defaultUserData,
    }),
    ThemeDecorator(Theme.GRAY),
];

export const LightRedesigned = TemplateRedesigned.bind({});
LightRedesigned.args = {};
LightRedesigned.decorators = [
    StoreDecorator({
        scrollSave: {
            scroll: {
                '': 0,
            },
        },
        profile: defaultDataProfile,
        user: defaultUserData,
    }),
    NewDesignDecorator,
];

export const DarkRedesigned = TemplateRedesigned.bind({});
DarkRedesigned.args = {};
DarkRedesigned.decorators = [
    StoreDecorator({
        scrollSave: {
            scroll: {
                '': 0,
            },
        },
        profile: defaultDataProfile,
        user: defaultUserData,
    }),
    ThemeDecorator(Theme.DARK),
    NewDesignDecorator,
];

export const OptionalBgRedesigned = TemplateRedesigned.bind({});
OptionalBgRedesigned.args = {};
OptionalBgRedesigned.decorators = [
    StoreDecorator({
        scrollSave: {
            scroll: {
                '': 0,
            },
        },
        profile: defaultDataProfile,
        user: defaultUserData,
    }),
    ThemeDecorator(Theme.GRAY),
    NewDesignDecorator,
];
