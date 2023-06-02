import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import cl from './NewArticlePreview.module.scss';
import { renderArticleBlock } from '@/entities/Article';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';
import { getNewArticleAll } from '../../model/selectors/NewArticle';

interface ArticleMaketProps {
    className?: string;
}

export const NewArticlePreview = memo((props: ArticleMaketProps) => {
    const { className } = props;
    const { t } = useTranslation('articleEdit');
    const data = useSelector(getNewArticleAll);

    return (
        <div
            className={cl.articleMaketPreview}
        >
            <Text
                title={data?.title}
                size="l"
                bold
            />
            <Text title={data?.subtitle} />

            <AppImage
                fallback={<Skeleton width="100%" height={420} border="16px" />}
                src={data?.img}
                className={cl.img}
            />
            {
                data?.blocks?.length
                    ? data?.blocks?.map(renderArticleBlock)
                    : (
                        <Text title={t('Здесь будет пример написанной статьи')} />
                    )
            }
        </div>
    );
});
