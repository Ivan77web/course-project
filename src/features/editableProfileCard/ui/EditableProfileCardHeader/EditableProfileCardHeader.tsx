import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = memo((props: EditableProfileCardHeaderProps) => {
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
                                    >
                                        {t('Редактировать')}
                                    </Button>
                                )
                                : (
                                    <HStack gap="8">
                                        <Button
                                            onClick={onCancelEdit}
                                            theme={ThemeButton.OUTLINE_RED}
                                        >
                                            {t('Отменить')}
                                        </Button>

                                        <Button
                                            onClick={onSave}
                                            theme={ThemeButton.OUTLINE}
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
