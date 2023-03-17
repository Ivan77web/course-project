import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cl from './ArticlesDetailsPage.module.scss';

interface ArticlesDetailsPageProps {
    className?: string;
}

const ArticlesDetailsPage: FC<ArticlesDetailsPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('article');

    return (
        <div className={classNames(cl.articlesDetailsPage, {}, [className])}>
            {t('ARTICLE DETAILS PAGE')}
        </div>
    );
};

export default memo(ArticlesDetailsPage);