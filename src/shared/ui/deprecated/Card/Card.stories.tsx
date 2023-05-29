import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '../Text';
import { Card, CardTheme } from './Card';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Card/CardDeprecated',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: <Text title="text" text="text text" />,
};
Normal.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Outlined = Template.bind({});
Outlined.args = {
    theme: CardTheme.OUTLINED,
    children: <Text title="text" text="text text" />,
};

export const Dark = Template.bind({});
Dark.args = {
    children: <Text title="text" text="text text" />,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Gray = Template.bind({});
Gray.args = {
    children: <Text title="text" text="text text" />,
};
Gray.decorators = [ThemeDecorator(Theme.GRAY)];

export const Max = Template.bind({});
Max.args = {
    max: true,
    children: <Text title="text" text="text text" />,
};
Max.decorators = [ThemeDecorator(Theme.GRAY)];
