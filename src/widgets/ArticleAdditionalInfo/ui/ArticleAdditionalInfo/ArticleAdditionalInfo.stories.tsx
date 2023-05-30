import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleAdditionalInfo } from './ArticleAdditionalInfo';
import avatar from '@/shared/assets/tests/avatarForStorybook.jpeg';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'widgets/ArticleAdditionalInfo',
    component: ArticleAdditionalInfo,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleAdditionalInfo>;

const Template: ComponentStory<typeof ArticleAdditionalInfo> = (args) => (
    <div className="app_redesigned">
        <ArticleAdditionalInfo {...args} />
    </div>
);

const defaultArgs = {
    author: {
        id: '1',
        avatar,
        username: 'Иван Иванов',

    },
    createdAt: '12.05.2019',
    views: 23342,
};

export const Normal = Template.bind({});
Normal.args = defaultArgs;
Normal.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = defaultArgs;
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const OptionalBg = Template.bind({});
OptionalBg.args = defaultArgs;
OptionalBg.decorators = [ThemeDecorator(Theme.GRAY)];
