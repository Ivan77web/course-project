import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ArticleViewSelectorRedesigned } from './ArticleViewSelectorRedesigned';

export default {
    title: 'features/Article/ArticleViewSelector/ArticleViewSelectorRedesigned',
    component: ArticleViewSelectorRedesigned,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleViewSelectorRedesigned>;

const Template: ComponentStory<typeof ArticleViewSelectorRedesigned> = (args) => <ArticleViewSelectorRedesigned {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Gray = Template.bind({});
Gray.args = {};
Gray.decorators = [ThemeDecorator(Theme.GRAY)];
