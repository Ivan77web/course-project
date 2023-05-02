import { StateSchema } from '@/app/providers/StoreProvider';
import { getArticleDetailsData, getArticleDetailsIsLoading, getArticleDetailsError } from './articleDetails';

describe('getArticleDetailsData', () => {
    test('Should return data', () => {
        const data = {
            id: '2',
            title: 'test title',
            subtitle: 'test subtitle',
            views: 21212,
        };

        const state: DeepPartial<StateSchema> = {
            articleDatails: {
                data,
            },
        };

        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });
});

describe('getArticleDetailsIsLoading', () => {
    test('Should return true', () => {
        const state: DeepPartial<StateSchema> = {
            articleDatails: {
                isLoading: true,
            },
        };

        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });

    test('Should return false', () => {
        const state: DeepPartial<StateSchema> = {
            articleDatails: {
                isLoading: false,
            },
        };

        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(undefined);
    });
});

describe('getArticleDetailsError', () => {
    test('Should return data', () => {
        const state: DeepPartial<StateSchema> = {
            articleDatails: {
                error: 'error',
            },
        };

        expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
    });
});
