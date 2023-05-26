import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Code } from '@/shared/ui/redesigned/Code';
import { Code as CodeDeprecated } from '@/shared/ui/deprecated/Code';
import { ArticleCodeBlock } from '../../model/types/article';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
    const { className, block } = props;

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <div className={classNames('', {}, [className])}>
                    <Code text={block.code} />
                </div>
            )}
            off={(
                <div className={classNames('', {}, [className])}>
                    <CodeDeprecated text={block.code} />
                </div>
            )}
        />
    );
});
