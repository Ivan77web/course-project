import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ArticleView } from '../../model/consts/consts';
import { ArticleListItemSkeleton } from './ArticleListItemSkeleton';

export default {
    title: 'entities/Article/ArticleListItemSkeleton',
    component: ArticleListItemSkeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleListItemSkeleton>;

const Template: ComponentStory<typeof ArticleListItemSkeleton> = (args) => <ArticleListItemSkeleton {...args} />;

export const BigCardNormal = Template.bind({});
BigCardNormal.args = {
    view: ArticleView.BIG,
};
BigCardNormal.decorators = [ThemeDecorator(Theme.LIGHT)];

export const BigCardDark = Template.bind({});
BigCardDark.args = {
    view: ArticleView.BIG,
};
BigCardDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BigCardGray = Template.bind({});
BigCardGray.args = {
    view: ArticleView.BIG,
};
BigCardGray.decorators = [ThemeDecorator(Theme.GRAY)];

export const SmallCardNormal = Template.bind({});
SmallCardNormal.args = {
    view: ArticleView.SMALL,
};
SmallCardNormal.decorators = [ThemeDecorator(Theme.LIGHT)];

export const SmallCardDark = Template.bind({});
SmallCardDark.args = {
    view: ArticleView.SMALL,
};
SmallCardDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SmallCardGray = Template.bind({});
SmallCardGray.args = {
    view: ArticleView.SMALL,
};
SmallCardGray.decorators = [ThemeDecorator(Theme.GRAY)];
