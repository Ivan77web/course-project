import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleList } from '@/entities/Article';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { VStack as VStackDeprecated } from '@/shared/ui/deprecated/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { data: articles, isLoading, isError } = useArticleRecommendationsList(3);

    if (isLoading || isError || !articles) {
        return null;
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <VStack
                    className={classNames('', {}, [className])}
                    data-testid="ArticleRecommendationsList"
                    gap="16"
                >
                    <Text
                        size="l"
                        title={t('Рекомендуем')}
                    />
                    <ArticleList
                        articles={articles}
                        target="_blank"
                    />
                </VStack>
            )}
            off={(
                <VStackDeprecated
                    className={classNames('', {}, [className])}
                    data-testid="ArticleRecommendationsList"
                >
                    <TextDeprecated
                        size={TextSize.L}
                        title={t('Рекомендуем')}
                    />
                    <ArticleList
                        articles={articles}
                        target="_blank"
                    />
                </VStackDeprecated>
            )}
        />
    );
});
