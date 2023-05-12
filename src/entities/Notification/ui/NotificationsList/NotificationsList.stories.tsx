import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NotificationsList } from './NotificationsList';

export default {
    title: 'entities/Notifications/NotificationsList',
    component: NotificationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    parameters: {
        mockData: [
            {
                url: `${__API__}/notifications`,
                method: 'GET',
                status: 200,
                response: [
                    {
                        id: '1',
                        title: 'first',
                        description: 'first second',
                    },
                    {
                        id: '2',
                        title: 'second',
                        description: 'second second',
                    },
                    {
                        id: '3',
                        title: 'third',
                        description: 'third second',
                        href: 'testHref',
                    },
                    {
                        id: '4',
                        title: 'fourth',
                        description: 'fourth second',
                        href: 'testHref',
                    },
                ],
            },
        ],
    },
} as ComponentMeta<typeof NotificationsList>;

const Template: ComponentStory<typeof NotificationsList> = (args) => <NotificationsList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const Gray = Template.bind({});
Gray.args = {};
Gray.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
