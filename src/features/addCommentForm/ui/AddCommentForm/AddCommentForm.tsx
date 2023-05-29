import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HStack as HStackDeprecated, HStack } from '@/shared/ui/redesigned/Stack';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import cl from './AddCommentForm.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation('comment');
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);

    const onCommentChangeText = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        if (text) {
            onSendComment(text);
            onCommentChangeText('');
        }
    }, [onCommentChangeText, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={(
                    <HStack
                        data-testid="AddCommentForm"
                        max
                        gap="16"
                        justify="between"
                        className={classNames('', {}, [className])}
                    >
                        <Input
                            data-testid="AddCommentForm.Input"
                            className={cl.input}
                            placeholder={t('Введите текст комментария')}
                            value={text}
                            onChange={onCommentChangeText}
                        />
                        <Button
                            onClick={onSendHandler}
                            data-testid="AddCommentForm.Button"
                        >
                            {t('Отправить')}
                        </Button>
                    </HStack>
                )}
                off={(
                    <HStackDeprecated
                        data-testid="AddCommentForm"
                        max
                        justify="between"
                        className={classNames(cl.addCommentForm, {}, [className])}
                    >
                        <InputDeprecated
                            data-testid="AddCommentForm.Input"
                            className={cl.input}
                            placeholder={t('Введите текст комментария')}
                            value={text}
                            onChange={onCommentChangeText}
                        />
                        <ButtonDeprecated
                            onClick={onSendHandler}
                            data-testid="AddCommentForm.Button"
                        >
                            {t('Отправить')}
                        </ButtonDeprecated>
                    </HStackDeprecated>
                )}
            />
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
