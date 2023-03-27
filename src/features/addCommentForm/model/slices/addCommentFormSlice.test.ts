import { AddCommentFormSchema } from '../types/addCommentForm';
import { addCommentFormActions, addCommentFormReducer } from './addCommentFormSlice';

describe('addCommentFormSlice', () => {
    test('setText', () => {
        const state: DeepPartial<AddCommentFormSchema> = {
            text: '',
            error: undefined,
        };

        expect(addCommentFormReducer(
            state as AddCommentFormSchema,
            addCommentFormActions.setText('text'),
        )).toEqual({
            text: 'text',
            error: undefined,
        });
    });
});
