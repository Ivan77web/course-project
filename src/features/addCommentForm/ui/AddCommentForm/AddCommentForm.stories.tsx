import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import AddCommentForm from './AddCommentForm';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'features/addCommentForm',
    component: AddCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;
const TemplateRedesigned: ComponentStory<typeof AddCommentForm> = (args) => <div className="app_redesigned"><AddCommentForm {...args} /></div>;

export const NormalDeprecated = Template.bind({});
NormalDeprecated.args = {};
NormalDeprecated.decorators = [
    StoreDecorator({
        addCommentForm: {
            text: '',
            error: '',
        },
    }),
];

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

export const NormalRedesigned = TemplateRedesigned.bind({});
NormalRedesigned.args = {};
NormalRedesigned.decorators = [
    NewDesignDecorator,
    StoreDecorator({
        addCommentForm: {
            text: '',
            error: '',
        },
    }),
];

export const DarkRedesigned = TemplateRedesigned.bind({});
DarkRedesigned.args = {};
DarkRedesigned.decorators = [
    NewDesignDecorator,
    StoreDecorator({
        addCommentForm: {
            text: '',
            error: '',
        },
    }),
    ThemeDecorator(Theme.DARK),
];

export const GrayRedesigned = TemplateRedesigned.bind({});
GrayRedesigned.args = {};
GrayRedesigned.decorators = [
    NewDesignDecorator,
    StoreDecorator({
        addCommentForm: {
            text: '',
            error: '',
        },
    }),
    ThemeDecorator(Theme.GRAY),
];
