import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticlesFilters } from './ArticlesFilters';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'widgets/ArticlesFilters',
    component: ArticlesFilters,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof ArticlesFilters>;

const Template: ComponentStory<typeof ArticlesFilters> = (args) => (
    <div className="app_redesigned">
        <ArticlesFilters {...args} />
    </div>
);

export const Normal = Template.bind({});
Normal.args = {
    sort: ArticleSortField.CREATED,
    order: 'asc',
    type: ArticleType.ECONOMICS,
    search: 'test article',
};

export const Dark = Template.bind({});
Dark.args = {
    sort: ArticleSortField.CREATED,
    order: 'asc',
    type: ArticleType.ECONOMICS,
    search: 'test article',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const OptionalBg = Template.bind({});
OptionalBg.args = {
    sort: ArticleSortField.CREATED,
    order: 'asc',
    type: ArticleType.ECONOMICS,
    search: 'test article',
};
OptionalBg.decorators = [ThemeDecorator(Theme.GRAY)];
