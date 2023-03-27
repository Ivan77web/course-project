import {
    getProfileData, getProfileReadOnly, profileActions, updateProfileData,
} from 'entities/Profile';
import { getUserAuthData } from 'entities/User';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import cl from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
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
        <div className={classNames(cl.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />

            {
                canEdit && (
                    <div className={cl.btnWrapper}>
                        {
                            readOnly
                                ? (
                                    <Button
                                        onClick={onEdit}
                                        className={cl.editBtn}
                                        theme={ThemeButton.OUTLINE}
                                    >
                                        {t('Редактировать')}
                                    </Button>
                                )
                                : (
                                    <div className={cl.buttons}>
                                        <Button
                                            onClick={onCancelEdit}
                                            className={cl.cancelBtn}
                                            theme={ThemeButton.OUTLINE_RED}
                                        >
                                            {t('Отменить')}
                                        </Button>

                                        <Button
                                            onClick={onSave}
                                            className={cl.saveBtn}
                                            theme={ThemeButton.OUTLINE}
                                        >
                                            {t('Сохранить')}
                                        </Button>
                                    </div>
                                )
                        }
                    </div>
                )
            }
        </div>
    );
};
