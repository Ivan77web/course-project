import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/avatarForStorybook.jpeg';
import { ProfileCardDeprecated } from './ProfileCardDeprecated';

export default {
    title: 'entities/ProfileCard/ProfileCardDeprecated',
    component: ProfileCardDeprecated,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof ProfileCardDeprecated>;

const Template: ComponentStory<typeof ProfileCardDeprecated> = (args) => <ProfileCardDeprecated {...args} />;

export const Primary = Template.bind({});
Primary.args = {
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

export const WithError = Template.bind({});
WithError.args = {
    error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
