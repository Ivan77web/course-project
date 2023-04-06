import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsError, getArticleDetailsIsLoading } from './comments';

describe('isLoading', () => {
    test('Should return data', () => {
        const state: DeepPartial<StateSchema> = {
            articlesDetailsPage: {
                comments: {
                    isLoading: true,
                },
            },
        };

        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(undefined);
    });
});

describe('error', () => {
    test('Should return data', () => {
        const state: DeepPartial<StateSchema> = {
            articlesDetailsPage: {
                comments: {
                    error: 'error',
                },
            },
        };

        expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
    });
});
