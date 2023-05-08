import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ArticlesDetailsPageHeader } from './ArticlesDetailsPageHeader';

export default {
    title: 'pages/Article/ArticlesDetailsPageHeader',
    component: ArticlesDetailsPageHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesDetailsPageHeader>;

const Template: ComponentStory<typeof ArticlesDetailsPageHeader> = (args) => <ArticlesDetailsPageHeader {...args} />;

export const NormalAdmin = Template.bind({});
NormalAdmin.args = {};
NormalAdmin.decorators = [StoreDecorator({
    articleDatails: {
        data: {
            id: '1',
            user: {
                id: '1',
                username: 'Admin',
            },
        },
    },
    user: {
        authData: {
            id: '1',
            username: 'Admin',
        },
    },
})];

export const DarkAdmin = Template.bind({});
DarkAdmin.args = {};
DarkAdmin.decorators = [
    StoreDecorator({
        articleDatails: {
            data: {
                id: '1',
                user: {
                    id: '1',
                    username: 'Admin',
                },
            },
        },
        user: {
            authData: {
                id: '1',
                username: 'Admin',
            },
        },
    }),
    ThemeDecorator(Theme.DARK),
];

export const GrayAdmin = Template.bind({});
GrayAdmin.args = {};
GrayAdmin.decorators = [
    StoreDecorator({
        articleDatails: {
            data: {
                id: '1',
                user: {
                    id: '1',
                    username: 'Admin',
                },
            },
        },
        user: {
            authData: {
                id: '1',
                username: 'Admin',
            },
        },
    }),
    ThemeDecorator(Theme.GRAY),
];

export const NormalUser = Template.bind({});
NormalUser.args = {};
NormalUser.decorators = [
    StoreDecorator({
        articleDatails: {
            data: {
                id: '1',
                user: {
                    id: '2',
                    username: 'Admin',
                },
            },
        },
        user: {
            authData: {
                id: '1',
                username: 'Admin',
            },
        },
    }),
    ThemeDecorator(Theme.LIGHT),
];

export const DarkUser = Template.bind({});
DarkUser.args = {};
DarkUser.decorators = [
    StoreDecorator({
        articleDatails: {
            data: {
                id: '1',
                user: {
                    id: '2',
                    username: 'Admin',
                },
            },
        },
        user: {
            authData: {
                id: '1',
                username: 'Admin',
            },
        },
    }),
    ThemeDecorator(Theme.DARK),
];

export const GrayUser = Template.bind({});
GrayUser.args = {};
GrayUser.decorators = [
    StoreDecorator({
        articleDatails: {
            data: {
                id: '1',
                user: {
                    id: '2',
                    username: 'Admin',
                },
            },
        },
        user: {
            authData: {
                id: '1',
                username: 'Admin',
            },
        },
    }),
    ThemeDecorator(Theme.GRAY),
];
