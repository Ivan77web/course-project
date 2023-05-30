import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticlePageGreeting } from './ArticlePageGreeting';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'features/Article/ArticlePageGreeting',
    component: ArticlePageGreeting,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlePageGreeting>;

const Template: ComponentStory<typeof ArticlePageGreeting> = (args) => <ArticlePageGreeting />;
const TemplateRedesigned: ComponentStory<typeof ArticlePageGreeting> = (args) => <div className="app_redesigned"><ArticlePageGreeting /></div>;

const store = StoreDecorator({
    user: {
        authData: {
            jsonSettings: {
                isFirstVisit: true,
            },
        },
    },
});

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [store];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [store, ThemeDecorator(Theme.DARK)];

export const OptionalBg = Template.bind({});
OptionalBg.args = {};
OptionalBg.decorators = [store, ThemeDecorator(Theme.GRAY)];

export const NormalRedesigned = TemplateRedesigned.bind({});
NormalRedesigned.args = {};
NormalRedesigned.decorators = [store, NewDesignDecorator];

export const DarkRedesigned = TemplateRedesigned.bind({});
DarkRedesigned.args = {};
DarkRedesigned.decorators = [store, NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const OptionalBgRedesigned = TemplateRedesigned.bind({});
OptionalBgRedesigned.args = {};
OptionalBgRedesigned.decorators = [store, NewDesignDecorator, ThemeDecorator(Theme.GRAY)];
