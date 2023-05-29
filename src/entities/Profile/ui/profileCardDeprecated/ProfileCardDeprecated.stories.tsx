import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/avatarForStorybook.jpeg';
import { ProfileCardDeprecated } from './ProfileCardDeprecated';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'entities/Profile/ProfileCard/ProfileCardDeprecated',
    component: ProfileCardDeprecated,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof ProfileCardDeprecated>;

const Template: ComponentStory<typeof ProfileCardDeprecated> = (args) => <ProfileCardDeprecated {...args} />;

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
