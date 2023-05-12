import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProfileRating } from './ProfileRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'features/ProfileRating',
    component: ProfileRating,
    argTypes: {
        backgroundColor: { control: 'color' },
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
} as ComponentMeta<typeof ProfileRating>;

const Template: ComponentStory<typeof ProfileRating> = (args) => <ProfileRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    profileId: '1',
};
Normal.decorators = [StoreDecorator({
    user: {
        authData: {
            id: '2',
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {
    profileId: '1',
};
Dark.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '2',
            },
        },
    }),
    ThemeDecorator(Theme.DARK),
];

export const Gray = Template.bind({});
Gray.args = {
    profileId: '1',
};
Gray.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '2',
            },
        },
    }),
    ThemeDecorator(Theme.GRAY),
];

export const WithoutRate = Template.bind({});
WithoutRate.args = {
    profileId: '1',
};
WithoutRate.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '2',
            },
        },
    }),
    ThemeDecorator(Theme.GRAY),
];
WithoutRate.parameters = {
    mockData: [
        {
            url: `${__API__}/profile-ratings?userId=1&profileId=2`,
            method: 'GET',
            status: 200,
            response: [
                {

                },
            ],
        },
    ],
};
