import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { NotificationItem } from './NotificationItem';

export default {
    title: 'entities/Notifications/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        item: {
            id: '1',
            title: 'first',
            description: 'first second',
        },
    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const Normal = Template.bind({});

export const IsLink = Template.bind({});
IsLink.args = {
    item: {
        id: '1',
        title: 'first',
        description: 'first second',
        href: 'testHref',
    },
};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Gray = Template.bind({});
Gray.decorators = [ThemeDecorator(Theme.GRAY)];
