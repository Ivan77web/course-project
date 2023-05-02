import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page/Page';
import cl from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = memo(({ className }: NotFoundPageProps) => {
    const { t } = useTranslation('notFoundPage');

    return (
        <Page className={classNames(cl.NotFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </Page>
    );
});
