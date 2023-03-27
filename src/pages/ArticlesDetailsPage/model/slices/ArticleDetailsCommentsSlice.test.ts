import { Comment } from 'entities/Comment';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentSchema } from '../types/ArticleDetailsCommentSchema';
import { articleDetailsCommentReducer } from './ArticleDetailsCommentsSlice';

const comments: Comment[] = [
    {
        id: '1',
        user: {
            id: '1',
            username: 'Ivan',
        },
        text: 'first comment',
    },
    {
        id: '2',
        user: {
            id: '2',
            username: 'Petya',
        },
        text: 'second comment',
    },
];

describe('ArticleDetailsCommentsSlice', () => {
    test('pending', () => {
        const state: DeepPartial<ArticleDetailsCommentSchema> = {
            isLoading: false,
            error: 'error',
        };

        expect(articleDetailsCommentReducer(
            state as ArticleDetailsCommentSchema,
            fetchCommentsByArticleId.pending,
        )).toEqual({
            error: undefined,
            isLoading: true,
        });
    });

    test('fulfilled', () => {
        const state: DeepPartial<ArticleDetailsCommentSchema> = {
            isLoading: true,
            entities: {},
            ids: [],
        };

        expect(articleDetailsCommentReducer(
            state as ArticleDetailsCommentSchema,
            fetchCommentsByArticleId.fulfilled(comments, '', ''),
        )).toEqual({
            isLoading: false,
            entities: {
                1: {
                    id: '1',
                    user: {
                        id: '1',
                        username: 'Ivan',
                    },
                    text: 'first comment',
                },
                2: {
                    id: '2',
                    user: {
                        id: '2',
                        username: 'Petya',
                    },
                    text: 'second comment',
                },
            },
            ids: ['1', '2'],
        });
    });
});
