import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { NotificationItemDeprecated } from './NotificationItemDeprecated';

export default {
    title: 'entities/Notifications/NotificationItem/NotificationItemDeprecated',
    component: NotificationItemDeprecated,
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
} as ComponentMeta<typeof NotificationItemDeprecated>;

const Template: ComponentStory<typeof NotificationItemDeprecated> = (args) => <NotificationItemDeprecated {...args} />;

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
