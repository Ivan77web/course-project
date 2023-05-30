import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleDetailsComments } from './ArticleDetailsComments';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'pages/Article/ArticleDetailsComments',
    component: ArticleDetailsComments,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsComments>;

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => <ArticleDetailsComments {...args} />;
const TemplateRedesigned: ComponentStory<typeof ArticleDetailsComments> = () => (
    <div className="app_redesigned">
        <ArticleDetailsComments />
    </div>
);

export const Normal = Template.bind({});
Normal.args = {
    id: '1',
};
Normal.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
    id: '1',
};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({}),
];

export const OptionalBg = Template.bind({});
OptionalBg.args = {
    id: '1',
};
OptionalBg.decorators = [
    ThemeDecorator(Theme.GRAY),
    StoreDecorator({}),
];

export const NormalRedesigned = TemplateRedesigned.bind({});
NormalRedesigned.args = {
    id: '1',
};
NormalRedesigned.decorators = [
    NewDesignDecorator,
    StoreDecorator({}),
];

export const DarkRedesigned = TemplateRedesigned.bind({});
DarkRedesigned.args = {
    id: '1',
};
DarkRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
    StoreDecorator({}),
];

export const OptionalBgRedesigned = TemplateRedesigned.bind({});
OptionalBgRedesigned.args = {
    id: '1',
};
OptionalBgRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.GRAY),
    StoreDecorator({}),
];
