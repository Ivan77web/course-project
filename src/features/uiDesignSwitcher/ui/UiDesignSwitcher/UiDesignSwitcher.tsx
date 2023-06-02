import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Listbox } from '@/shared/ui/redesigned/Popups';
import { Listbox as ListboxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ToggleFeatures, getFeatureFlags } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { updateFeatureFlag } from '@/shared/lib/features/services/updateFeatureFlags';
import { getUserAuthData } from '@/entities/User';
import { HStack, HStack as HStackDeprecated } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Skeleton as SkeletonDeprecated, Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface UiDesignSwitcherProps {
    className?: string;
}

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
    const { className } = props;
    const { t } = useTranslation('settingsPage');
    const isAppRedesigned = getFeatureFlags('isAppRedesigned');
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const [isLoading, setIsLoading] = useState(false);

    const items = [
        {
            content: t('новый'),
            value: 'new',
        },
        {
            content: t('старый'),
            value: 'old',
        },
    ];

    const onChange = async (value: string) => {
        if (authData) {
            setIsLoading(true);
            await dispatch(updateFeatureFlag({
                newFeatures: {
                    isAppRedesigned: value === 'new',
                },
                userId: authData.id,
            })).unwrap();
            setIsLoading(false);
        }
    };

    const deprecatedSwitcher = (
        <HStackDeprecated gap="8">
            <TextDeprecated text={t('Вариант интерфейса')} />
            {isLoading
                ? <SkeletonDeprecated width={100} height={40} />
                : (
                    <ListboxDeprecated
                        onChange={onChange}
                        className={classNames('', {}, [className])}
                        value={isAppRedesigned ? 'new' : 'old'}
                        items={items}
                    />
                )}
        </HStackDeprecated>
    );

    const redesignedSwitcher = (
        <HStack gap="8">
            <Text text={t('Вариант интерфейса')} />
            {isLoading
                ? <Skeleton width={300} height={40} />
                : (
                    <Listbox
                        onChange={onChange}
                        className={classNames('', {}, [className])}
                        value={isAppRedesigned ? 'new' : 'old'}
                        items={items}
                    />
                )}
        </HStack>
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={redesignedSwitcher}
            off={deprecatedSwitcher}
        />
    );
});
