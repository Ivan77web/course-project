import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ArticleViewSelectorRedesigned } from './ArticleViewSelectorRedesigned';
import { ArticleView } from '@/entities/Article';

export default {
    title: 'features/Article/ArticleViewSelector/ArticleViewSelectorRedesigned',
    component: ArticleViewSelectorRedesigned,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleViewSelectorRedesigned>;

const Template: ComponentStory<typeof ArticleViewSelectorRedesigned> = (args) => <div className="app_redesigned"><ArticleViewSelectorRedesigned {...args} /></div>;

export const Normal = Template.bind({});
Normal.args = {
    view: ArticleView.SMALL,
};

export const Dark = Template.bind({
    view: ArticleView.SMALL,
});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Gray = Template.bind({
    view: ArticleView.SMALL,
});
Gray.args = {};
Gray.decorators = [ThemeDecorator(Theme.GRAY)];
