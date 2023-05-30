import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProfileRating } from './ProfileRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'features/Profile/ProfileRating',
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
const TemplateRedesigned: ComponentStory<typeof ProfileRating> = (args) => (
    <div className="app_redesigned">
        <ProfileRating {...args} />
    </div>
);

const defaultStoreData = {
    user: {
        authData: {
            id: '2',
        },
    },
};

const defaultArgs = {
    profileId: '1',
};

export const Normal = Template.bind({});
Normal.args = defaultArgs;
Normal.decorators = [StoreDecorator(defaultStoreData)];

export const Dark = Template.bind({});
Dark.args = defaultArgs;
Dark.decorators = [
    StoreDecorator(defaultStoreData),
    ThemeDecorator(Theme.DARK),
];

export const Gray = Template.bind({});
Gray.args = defaultArgs;
Gray.decorators = [
    StoreDecorator(defaultStoreData),
    ThemeDecorator(Theme.GRAY),
];

export const WithoutRate = Template.bind({});
WithoutRate.args = defaultArgs;
WithoutRate.decorators = [
    StoreDecorator(defaultStoreData),
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

export const NormalRedesigned = TemplateRedesigned.bind({});
NormalRedesigned.args = defaultArgs;
NormalRedesigned.decorators = [NewDesignDecorator, StoreDecorator(defaultStoreData)];

export const DarkRedesigned = TemplateRedesigned.bind({});
DarkRedesigned.args = defaultArgs;
DarkRedesigned.decorators = [
    NewDesignDecorator,
    StoreDecorator(defaultStoreData),
    ThemeDecorator(Theme.DARK),
];

export const GrayRedesigned = TemplateRedesigned.bind({});
GrayRedesigned.args = defaultArgs;
GrayRedesigned.decorators = [
    NewDesignDecorator,
    StoreDecorator(defaultStoreData),
    ThemeDecorator(Theme.GRAY),
];

export const WithoutRateRedesigned = TemplateRedesigned.bind({});
WithoutRateRedesigned.args = defaultArgs;
WithoutRateRedesigned.decorators = [
    NewDesignDecorator,
    StoreDecorator(defaultStoreData),
    ThemeDecorator(Theme.GRAY),
];
WithoutRateRedesigned.parameters = {
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
