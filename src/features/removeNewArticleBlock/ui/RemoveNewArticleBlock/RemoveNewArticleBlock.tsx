import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './RemoveNewArticleBlock.module.scss';
import { Icon } from '@/shared/ui/redesigned/Icon';
import Delete from '@/shared/assets/icons/delete.svg';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { NewArticleActions } from '@/entities/NewArticle';

interface RemoveNewArticleBlockProps {
    className?: string;
    id: string
}

export const RemoveNewArticleBlock = memo((props: RemoveNewArticleBlockProps) => {
    const { className, id } = props;
    const dispatch = useAppDispatch();

    const onDeleteBlock = (id: string) => {
        dispatch(NewArticleActions.removeBlock(id));
    };

    return (
        <Icon
            className={classNames(cl.RemoveNewArticleBlock, {}, [className])}
            width={16}
            height={16}
            Svg={Delete}
            clickable
            onClick={() => onDeleteBlock(id)}
        />
    );
});
