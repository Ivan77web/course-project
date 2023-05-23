import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { NotificationItemRedesigned } from './NotificationItemRedesigned';

export default {
    title: 'entities/Notifications/NotificationItem/NotificationItemRedesigned',
    component: NotificationItemRedesigned,
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
} as ComponentMeta<typeof NotificationItemRedesigned>;

const Template: ComponentStory<typeof NotificationItemRedesigned> = (args) => <NotificationItemRedesigned {...args} />;

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
