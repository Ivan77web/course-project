import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './DetailsContainer.module.scss';
import { ArticleDetails } from '@/entities/Article';
import { Card } from '@/shared/ui/redesigned/Card';

interface DetailsContainerProps {
    className?: string;
}

export const DetailsContainer = memo((props: DetailsContainerProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();
    const articleId = __PROJECT__ !== 'storybook' ? id : '1';

    if (!articleId) {
        return <div className={classNames('', {}, [className])}>{t('Статья не найдена')}</div>;
    }

    return (
        <Card max border="roundBorder" className={classNames(cl.detailsContainer, {}, [className])} padding="24">
            <ArticleDetails id={articleId} />
        </Card>
    );
});
