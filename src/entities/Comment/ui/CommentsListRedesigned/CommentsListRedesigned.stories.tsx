import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Comment } from '../../model/types/comment';
import { CommentsListRedesigned } from './CommentsListRedesigned';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'entities/Comment/CommentsList/CommentsListRedesigned',
    component: CommentsListRedesigned,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentsListRedesigned>;

const Template: ComponentStory<typeof CommentsListRedesigned> = (args) => <div className="app_redesigned"><CommentsListRedesigned {...args} /></div>;

const comments: Comment[] = [
    {
        id: '1',
        user: {
            id: '1',
            username: 'Admin',
            avatar: 'https://sun1-87.userapi.com/impg/tRxej3Q1HTz4NAgsFDR2nlFni-I4PYgQqhiV3w/VI2RqkRijKE.jpg?size=960x960&quality=95&sign=79f905338520287eb55a728d93e1c100&type=album',
        },
        text: 'Какой-то комментарий',
    },
    {
        id: '2',
        user: {
            id: '2',
            username: 'User',
            avatar: 'https://sun9-36.userapi.com/impg/c855220/v855220920/217645/M_4Hrk9SIZ4.jpg?size=723x1080&quality=96&sign=907eeb1184d759743dc91b92133cc94a&type=album',
        },
        text: 'Какой-то другой комментарий',
    },
];

export const Normal = Template.bind({});
Normal.args = {
    comments,
};
Normal.decorators = [NewDesignDecorator];

export const Dark = Template.bind({});
Dark.args = {
    comments,
};
Dark.decorators = [ThemeDecorator(Theme.DARK), NewDesignDecorator];

export const Gray = Template.bind({});
Gray.args = {
    comments,
};
Gray.decorators = [ThemeDecorator(Theme.GRAY), NewDesignDecorator];

export const isLoading = Template.bind({});
isLoading.args = {
    isLoading: true,
};
isLoading.decorators = [NewDesignDecorator];
