import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/avatarForStorybook.jpeg';
import { ProfileCardRedesigned } from './ProfileCardRedesigned';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'entities/Profile/ProfileCard/ProfileCardRedesigned',
    component: ProfileCardRedesigned,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof ProfileCardRedesigned>;

const Template: ComponentStory<typeof ProfileCardRedesigned> = (args) => <div className="app_redesigned"><ProfileCardRedesigned {...args} /></div>;

const mockData = {
    data: {
        username: 'Test name',
        first: 'Test',
        lastname: 'Test',
        age: 20,
        country: Country.Russia,
        currency: Currency.RUB,
        avatar,
        city: 'Moscow',
    },
};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = mockData;
PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = mockData;
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryOptionalBg = Template.bind({});
PrimaryOptionalBg.args = mockData;
PrimaryOptionalBg.decorators = [ThemeDecorator(Theme.GRAY)];

export const WithError = Template.bind({});
WithError.args = {
    error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

export const NotReadOnly = Template.bind({});
NotReadOnly.args = {
    readOnly: false,
};
