import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleTypeTabs } from './ArticleTypeTabs';
import { ArticleType } from '@/entities/Article';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'features/Article/ArticleTypeTabs',
    component: ArticleTypeTabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => <ArticleTypeTabs {...args} />;
const TemplateRedesigned: ComponentStory<typeof ArticleTypeTabs> = (args) => <div className="app_redesigned"><ArticleTypeTabs {...args} /></div>;

export const Normal = Template.bind({});
Normal.args = {
    value: ArticleType.IT,
};

export const Dark = Template.bind({});
Dark.args = {
    value: ArticleType.IT,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const OptionalBg = Template.bind({});
OptionalBg.args = {
    value: ArticleType.IT,
};
OptionalBg.decorators = [ThemeDecorator(Theme.GRAY)];

export const NormalRedesigned = TemplateRedesigned.bind({});
NormalRedesigned.args = {
    value: ArticleType.IT,
};
NormalRedesigned.decorators = [NewDesignDecorator];

export const DarkRedesigned = TemplateRedesigned.bind({});
DarkRedesigned.args = {
    value: ArticleType.IT,
};
DarkRedesigned.decorators = [
    ThemeDecorator(Theme.DARK),
    NewDesignDecorator,
];

export const OptionalBgRedesigned = TemplateRedesigned.bind({});
OptionalBgRedesigned.args = {
    value: ArticleType.IT,
};
OptionalBgRedesigned.decorators = [
    ThemeDecorator(Theme.GRAY),
    NewDesignDecorator,
];
