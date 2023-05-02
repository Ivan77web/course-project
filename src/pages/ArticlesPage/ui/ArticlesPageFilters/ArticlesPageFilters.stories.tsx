import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ArticlesPageFilters } from './ArticlesPageFilters';

export default {
    title: 'pages/Articles/ArticlesPageFilters',
    component: ArticlesPageFilters,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPageFilters>;

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => <ArticlesPageFilters {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    articlesPage: {
        order: 'asc',
        sort: ArticleSortField.VIEWS,
        view: ArticleView.SMALL,
        search: '',
        type: ArticleType.ALL,
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    articlesPage: {
        order: 'asc',
        sort: ArticleSortField.VIEWS,
        view: ArticleView.SMALL,
        search: '',
        type: ArticleType.ALL,
    },
})];

export const Gray = Template.bind({});
Gray.args = {};
Gray.decorators = [ThemeDecorator(Theme.GRAY), StoreDecorator({
    articlesPage: {
        order: 'asc',
        sort: ArticleSortField.VIEWS,
        view: ArticleView.SMALL,
        search: '',
        type: ArticleType.ALL,
    },
})];
