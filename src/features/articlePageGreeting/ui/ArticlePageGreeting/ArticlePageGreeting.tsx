import { useTranslation } from 'react-i18next';
import { memo, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Modal as ModalDeprecated } from '@/shared/ui/deprecated/Modal';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Text } from '@/shared/ui/redesigned/Text';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Drawer as DrawerDeprecated } from '@/shared/ui/deprecated/Drawer';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { ToggleFeatures } from '@/shared/lib/features';

export const ArticlePageGreeting = memo(() => {
    const { t } = useTranslation('articlePageGreeting');
    const [isOpen, setIsOpen] = useState(false);
    const { isArticlePageWasOpened } = useJsonSettings();
    const dispatch = useAppDispatch();
    const onClose = () => setIsOpen(false);

    const text = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <Text
                    title={t('Добро пожаловать!')}
                    text={t('Здесь вы можете искать и просматривать статьи на различные темы')}
                />
            )}
            off={(
                <TextDeprecated
                    title={t('Добро пожаловать!')}
                    text={t('Здесь вы можете искать и просматривать статьи на различные темы')}
                />
            )}
        />
    );

    useEffect(() => {
        if (!isArticlePageWasOpened) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isArticlePageWasOpened: true }));
        }
    }, [dispatch, isArticlePageWasOpened]);

    if (isMobile) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={(
                    <Drawer isOpen={isOpen} lazy onClose={onClose}>
                        {text}
                    </Drawer>
                )}
                off={(
                    <DrawerDeprecated isOpen={isOpen} lazy onClose={onClose}>
                        {text}
                    </DrawerDeprecated>
                )}
            />
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <Modal lazy isOpen={isOpen} onClose={onClose}>
                    {text}
                </Modal>
            )}
            off={(
                <ModalDeprecated lazy isOpen={isOpen} onClose={onClose}>
                    {text}
                </ModalDeprecated>
            )}
        />
    );
});
