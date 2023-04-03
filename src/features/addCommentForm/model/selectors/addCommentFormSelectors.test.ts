import { StateSchema } from 'app/providers/StoreProvider';
import { getAddCommentFormText, getAddCommentFormError } from './addCommentFormSelectors';

describe('getAddCommentFormText', () => {
    test('Should return data', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: 'hello',
            },
        };

        expect(getAddCommentFormText(state as StateSchema)).toEqual('hello');
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getAddCommentFormText(state as StateSchema)).toEqual('');
    });
});

describe('getAddCommentFormError', () => {
    test('Should return data', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                error: 'error',
            },
        };

        expect(getAddCommentFormError(state as StateSchema)).toEqual('error');
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined);
    });
});
