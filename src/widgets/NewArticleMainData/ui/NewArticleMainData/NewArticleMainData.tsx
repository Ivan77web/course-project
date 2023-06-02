import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './NewArticleMainData.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { Input } from '@/shared/ui/redesigned/Input';
import { Listbox } from '@/shared/ui/redesigned/Popups';
import { ArticleType } from '@/entities/Article';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Button } from '@/shared/ui/redesigned/Button';
import {
    getNewArticleTitle, getNewArticleSubtitle, getNewArticleImg, getNewArticleType, NewArticleActions,
} from '@/entities/NewArticle';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface NewArticleMainDataProps {
    className?: string;
}

export const NewArticleMainData = memo((props: NewArticleMainDataProps) => {
    const dispatch = useAppDispatch();
    const { className } = props;
    const { t } = useTranslation('articleEdit');
    const title = useSelector(getNewArticleTitle);
    const subTitle = useSelector(getNewArticleSubtitle);
    const photo = useSelector(getNewArticleImg);
    const types = useSelector(getNewArticleType);

    const options = [
        { value: ArticleType.ALL, content: t('Все') },
        { value: ArticleType.ECONOMICS, content: t('Экономика') },
        { value: ArticleType.IT, content: t('Айти') },
        { value: ArticleType.SCIENCE, content: t('Наука') },
    ];

    const onChangeTitle = (value: string) => {
        dispatch(NewArticleActions.setTitle(value || ''));
    };

    const onChangeOpinion = (value: string) => {
        dispatch(NewArticleActions.setSubtitle(value || ''));
    };

    const onChangePhoto = (value: string) => {
        dispatch(NewArticleActions.setImg(value || ''));
    };

    return (
        <Card
            className={classNames(cl.newArticleMainData, {}, [className])}
            max
            padding="16"
        >
            <VStack gap="16">
                <Input
                    value={title}
                    onChange={(value) => onChangeTitle(value)}
                    placeholder={t('Название статьи')}
                />

                <Input
                    value={subTitle}
                    onChange={(value) => onChangeOpinion(value)}
                    placeholder={t('Описание статьи')}
                />

                <Input
                    value={photo}
                    onChange={(value) => onChangePhoto(value)}
                    placeholder={t('Ссылка на фото')}
                />

                <Card variant="light" className={cl.listbox}>
                    <Listbox
                        items={options}
                        onChange={() => { }}
                        value={options[0].content}
                        defaultValue={options[0].content}
                    />
                </Card>

                <Button
                    variant="filled"
                >
                    {t('Опубликовать')}
                </Button>
            </VStack>
        </Card>
    );
});
