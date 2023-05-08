import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import AddCommentForm from './AddCommentForm';

export default {
    title: 'features/addCommentForm',
    component: AddCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    addCommentForm: {
        text: '',
        error: '',
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    StoreDecorator({
        addCommentForm: {
            text: '',
            error: '',
        },
    }),
    ThemeDecorator(Theme.DARK),
];

export const Gray = Template.bind({});
Gray.args = {};
Gray.decorators = [
    StoreDecorator({
        addCommentForm: {
            text: '',
            error: '',
        },
    }),
    ThemeDecorator(Theme.GRAY),
];
