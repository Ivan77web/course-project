import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Comment } from 'entities/Comment';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

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
