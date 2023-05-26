import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/redesigned/Text';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { ArticleTextBlock } from '../../model/types/article';
import cl from './ArticleTextBlockComponent.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <div className={classNames(cl.articleTextBlockComponent, {}, [className])}>
                    {
                        block.title && (
                            <Text title={block.title} className={cl.title} />
                        )
                    }

                    {
                        block.paragraphs.map((par) => (
                            <Text key={par} text={par} className={cl.paragraph} />
                        ))
                    }
                </div>
            )}
            off={(
                <div className={classNames(cl.articleTextBlockComponent, {}, [className])}>
                    {
                        block.title && (
                            <TextDeprecated title={block.title} className={cl.title} />
                        )
                    }

                    {
                        block.paragraphs.map((par) => (
                            <TextDeprecated key={par} text={par} className={cl.paragraph} />
                        ))
                    }
                </div>
            )}
        />
    );
});
