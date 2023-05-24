import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ArticleViewSelectorDeprecated } from './ArticleViewSelectorDeprecated';

export default {
    title: 'features/Article/ArticleViewSelector/ArticleViewSelectorDeprecated',
    component: ArticleViewSelectorDeprecated,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleViewSelectorDeprecated>;

const Template: ComponentStory<typeof ArticleViewSelectorDeprecated> = (args) => <ArticleViewSelectorDeprecated {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Gray = Template.bind({});
Gray.args = {};
Gray.decorators = [ThemeDecorator(Theme.GRAY)];
