import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Comment } from 'entities/Comment/';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { CommentsList } from './CommentsList';

export default {
    title: 'entities/Comment/CommentsList',
    component: CommentsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentsList>;

const Template: ComponentStory<typeof CommentsList> = (args) => <CommentsList {...args} />;

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

export const Dark = Template.bind({});
Dark.args = {
    comments,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Gray = Template.bind({});
Gray.args = {
    comments,
};
Gray.decorators = [ThemeDecorator(Theme.GRAY)];

export const isLoading = Template.bind({});
isLoading.args = {
    isLoading: true,
};
