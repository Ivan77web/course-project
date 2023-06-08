import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './PublishNewArticle.module.scss';
import { Button } from '@/shared/ui/redesigned/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { NewArticleActions } from '@/entities/NewArticle';

interface PublishNewArticleProps {
    className?: string;
    onClick?: () => void
}

export const PublishNewArticle = memo(({ className, onClick }: PublishNewArticleProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('articleEdit');

    const onClickHandle = () => {
        if (onClick) {
            onClick();
            dispatch(NewArticleActions.reset());
        }
    };

    return (
        <Button
            className={classNames(cl.PublishNewArticle, {}, [className])}
            variant="filled"
            onClick={onClickHandle}
        >
            {t('Опубликовать')}
        </Button>
    );
});
