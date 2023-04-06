import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import cl from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const { className } = props;
    const { t } = useTranslation('articleEdit');
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);
    return (
        <Page className={classNames(cl.articleEditPage, {}, [className])}>
            {
                isEdit
                    ? t('Страница редактирования статьи')
                    : t('Страница создания статьи')
            }
        </Page>
    );
});

export default ArticleEditPage;
