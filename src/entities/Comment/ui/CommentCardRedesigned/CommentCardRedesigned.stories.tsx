import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Comment } from '../../model/types/comment';
import { CommentCardRedesigned } from './CommentCardRedesigned';

export default {
    title: 'entities/Comment/CommentCard/CommentCardRedesigned',
    component: CommentCardRedesigned,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCardRedesigned>;

const Template: ComponentStory<typeof CommentCardRedesigned> = (args) => <div className="app_redesigned"><CommentCardRedesigned {...args} /></div>;

const comment: Comment = {
    id: '1',
    user: {
        id: '1',
        username: 'Admin',
        avatar: 'https://sun1-87.userapi.com/impg/tRxej3Q1HTz4NAgsFDR2nlFni-I4PYgQqhiV3w/VI2RqkRijKE.jpg?size=960x960&quality=95&sign=79f905338520287eb55a728d93e1c100&type=album',
    },
    text: 'Какой-то комментарий',
};

export const Normal = Template.bind({});
Normal.args = {
    comment,
};

export const Dark = Template.bind({});
Dark.args = {
    comment,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Gray = Template.bind({});
Gray.args = {
    comment,
};
Gray.decorators = [ThemeDecorator(Theme.GRAY)];

export const isLoading = Template.bind({});
isLoading.args = {
    isLoading: true,
};
isLoading.decorators = [ThemeDecorator(Theme.GRAY)];
