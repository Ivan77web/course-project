import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/redesigned/Button';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { Card } from '@/shared/ui/redesigned/Card';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeaderRedesigned = memo((props: EditableProfileCardHeaderProps) => {
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
        <Card max padding="24">
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
                                            variant="outline"
                                            data-testid="EditableProfileCardHeader.EditButton"
                                        >
                                            {t('Редактировать')}
                                        </Button>
                                    )
                                    : (
                                        <HStack gap="8">
                                            <Button
                                                onClick={onCancelEdit}
                                                variant="outline"
                                                data-testid="EditableProfileCardHeader.CancelButton"
                                                color="success"
                                            >
                                                {t('Отменить')}
                                            </Button>

                                            <Button
                                                onClick={onSave}
                                                variant="outline"
                                                data-testid="EditableProfileCardHeader.SaveButton"
                                                color="error"
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
        </Card>
    );
});
