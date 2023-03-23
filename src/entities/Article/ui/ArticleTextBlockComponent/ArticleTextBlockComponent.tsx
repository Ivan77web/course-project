import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { ArticleTextBlock } from '../../model/types/article';
import cl from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;

    return (
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
    );
});
