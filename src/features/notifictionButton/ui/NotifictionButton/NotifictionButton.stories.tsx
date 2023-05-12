import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { NotifictionButton } from './NotifictionButton';

export default {
    title: 'features/NotifictionButton',
    component: NotifictionButton,
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
} as ComponentMeta<typeof NotifictionButton>;

const Template: ComponentStory<typeof NotifictionButton> = (args) => <NotifictionButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];

export const Gray = Template.bind({});
Gray.decorators = [StoreDecorator({}), ThemeDecorator(Theme.GRAY)];
