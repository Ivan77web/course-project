import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ThemeButton } from '@/shared/ui/deprecated/Button';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/deprecated/Text';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeaderDeprecated = memo((props: EditableProfileCardHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation('profile');
    const readOnly = useSelector(getProfileReadOnly);
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadOnly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack max justify="between" className={classNames('', {}, [className])}>
            <Text title={t('Профиль')} />

            {
                canEdit && (
                    <div>
                        {
                            readOnly
                                ? (
                                    <Button
                                        onClick={onEdit}
                                        theme={ThemeButton.OUTLINE}
                                        data-testid="EditableProfileCardHeader.EditButton"
                                    >
                                        {t('Редактировать')}
                                    </Button>
                                )
                                : (
                                    <HStack gap="8">
                                        <Button
                                            onClick={onCancelEdit}
                                            theme={ThemeButton.OUTLINE_RED}
                                            data-testid="EditableProfileCardHeader.CancelButton"
                                        >
                                            {t('Отменить')}
                                        </Button>

                                        <Button
                                            onClick={onSave}
                                            theme={ThemeButton.OUTLINE}
                                            data-testid="EditableProfileCardHeader.SaveButton"
                                        >
                                            {t('Сохранить')}
                                        </Button>
                                    </HStack>
                                )
                        }
                    </div>
                )
            }
        </HStack>
    );
});
