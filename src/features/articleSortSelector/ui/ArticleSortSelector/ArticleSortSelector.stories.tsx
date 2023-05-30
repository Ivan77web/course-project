import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleSortSelector } from './ArticleSortSelector';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { ArticleSortField } from '@/entities/Article';

export default {
    title: 'features/Article/ArticleSortSelector',
    component: ArticleSortSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleSortSelector>;

const Template: ComponentStory<typeof ArticleSortSelector> = (args) => <ArticleSortSelector {...args} />;
const TemplateRedesigned: ComponentStory<typeof ArticleSortSelector> = (args) => <div className="app_redesigned"><ArticleSortSelector {...args} /></div>;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Gray = Template.bind({});
Gray.args = {};
Gray.decorators = [ThemeDecorator(Theme.GRAY)];

export const NormalRedesigned = TemplateRedesigned.bind({});
NormalRedesigned.args = {
    sort: ArticleSortField.CREATED,
    order: 'asc',
};
NormalRedesigned.decorators = [NewDesignDecorator];

export const DarkRedesigned = TemplateRedesigned.bind({});
DarkRedesigned.args = {
    sort: ArticleSortField.CREATED,
    order: 'asc',
};
DarkRedesigned.decorators = [ThemeDecorator(Theme.DARK), NewDesignDecorator];

export const GrayRedesigned = TemplateRedesigned.bind({});
GrayRedesigned.args = {
    sort: ArticleSortField.CREATED,
    order: 'asc',
};
GrayRedesigned.decorators = [ThemeDecorator(Theme.GRAY), NewDesignDecorator];
