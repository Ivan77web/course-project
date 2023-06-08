import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './NewArticleMap.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { getNewArticleBlocks } from '@/entities/NewArticle';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { RemoveNewArticleBlock } from '@/features/removeNewArticleBlock';

interface NewArticleMapProps {
    className?: string;
}

export const NewArticleMap = memo((props: NewArticleMapProps) => {
    const { className } = props;
    const { t } = useTranslation('articleEdit');
    const blocks = useSelector(getNewArticleBlocks);

    return (
        <Card
            className={classNames(cl.newArticleMap, {}, [className])}
            max
            padding="8"
        >
            <VStack
                max
                gap="8"
            >
                {
                    blocks?.length
                        ? blocks.map((block) => (
                            <Card
                                variant="light"
                                max
                            >
                                <HStack justify="between">
                                    {block.type}
                                    <RemoveNewArticleBlock id={block.id} />
                                </HStack>
                            </Card>
                        ))
                        : <p>{t('Блоков нет')}</p>
                }
            </VStack>
        </Card>
    );
});
