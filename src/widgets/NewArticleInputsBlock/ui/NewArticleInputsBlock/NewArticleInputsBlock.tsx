import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './NewArticleInputsBlock.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { Input } from '@/shared/ui/redesigned/Input';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleBlock, ArticleBlockType } from '@/entities/Article';
import { Button } from '@/shared/ui/redesigned/Button';
import { Listbox } from '@/shared/ui/redesigned/Popups';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { NewArticleActions, getNewArticleBlocks } from '@/entities/NewArticle';

interface NewArticleInputsBlockProps {
    className?: string;
}

export const NewArticleInputsBlock = memo((props: NewArticleInputsBlockProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation('articleEdit');
    const blocks = useSelector(getNewArticleBlocks);

    const [typeBlock, setTypeBlock] = useState<ArticleBlockType>(ArticleBlockType.TEXT);
    const [linkToPhoto, setLinkToPhoto] = useState<string>('');
    const [captionForThePhoto, setCaptionForThePhotosetLinkToPhoto] = useState<string>('');
    const [code, setCode] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [text, setText] = useState<string>('');
    const [paragraphs, setParagraphs] = useState<string[]>([]);

    const options = [
        { value: ArticleBlockType.CODE, content: t('Код') },
        { value: ArticleBlockType.IMAGE, content: t('Фото') },
        { value: ArticleBlockType.TEXT, content: t('Текст') },
    ];

    const changeTypeBlock = (value: ArticleBlockType) => {
        setTypeBlock(value);
    };

    const addParagraphs = () => {
        if (text) {
            const pars = paragraphs;
            pars.push(text);
            setParagraphs(pars);
            setText('');
        }
    };

    const createBlock = () => {
        let block: ArticleBlock;

        if (typeBlock === ArticleBlockType.CODE && code.length) {
            block = {
                id: String(blocks ? blocks.length + 1 : 0),
                type: ArticleBlockType.CODE,
                code,
            };

            setCode('');
        } else if (typeBlock === ArticleBlockType.IMAGE && linkToPhoto.length && captionForThePhoto.length) {
            block = {
                id: String(blocks ? blocks.length + 1 : 0),
                type: ArticleBlockType.IMAGE,
                src: linkToPhoto,
                title: captionForThePhoto,
            };

            setLinkToPhoto('');
            setCaptionForThePhotosetLinkToPhoto('');
        } else if (typeBlock === ArticleBlockType.TEXT && (paragraphs.length || text) && title.length) {
            block = {
                id: String(blocks ? blocks.length + 1 : 0),
                type: ArticleBlockType.TEXT,
                paragraphs: text ? [...paragraphs, text] : paragraphs,
                title,
            };

            setTitle('');
            setText('');
            setParagraphs([]);
        } else {
            return null;
        }

        return block;
    };

    const onClickAddBlock = () => {
        const block = createBlock();

        if (block) {
            dispatch(NewArticleActions.addBlock(block));
        }
    };

    return (
        <Card
            className={classNames(cl.newArticleInputsBlock, {}, [className])}
            max
        >
            <HStack gap="16" justify="between">
                <Card max>
                    <VStack gap="8">
                        {
                            typeBlock === ArticleBlockType.CODE
                            && (
                                <Input
                                    value={code}
                                    onChange={(value) => setCode(value)}
                                    placeholder={t('Введите код')}
                                />
                            )
                        }
                        {
                            typeBlock === ArticleBlockType.IMAGE
                            && (
                                <>
                                    <Input
                                        value={linkToPhoto}
                                        onChange={(value) => setLinkToPhoto(value)}
                                        placeholder={t('Введите ссылку на фото')}
                                    />
                                    <Input
                                        value={captionForThePhoto}
                                        onChange={(value) => setCaptionForThePhotosetLinkToPhoto(value)}
                                        placeholder={t('Введите подпись к фото')}
                                    />
                                </>
                            )
                        }
                        {
                            typeBlock === ArticleBlockType.TEXT
                            && (
                                <>
                                    <Input
                                        value={title}
                                        onChange={(value) => setTitle(value)}
                                        placeholder={t('Введите заголовок')}
                                    />
                                    <Input
                                        value={text}
                                        onChange={(value) => setText(value)}
                                        placeholder={t('Введите параграф')}
                                    />
                                </>
                            )
                        }
                    </VStack>
                </Card>
                <Card max>
                    <VStack gap="8">
                        {
                            typeBlock === ArticleBlockType.TEXT
                            && <Button onClick={addParagraphs}>{t('Добавить параграф')}</Button>
                        }
                        <HStack gap="8">
                            <Button onClick={onClickAddBlock}>{t('Добавить блок')}</Button>
                            <Listbox
                                items={options}
                                onChange={(value) => changeTypeBlock(value)}
                                value={typeBlock}
                                direction="top left"
                            />
                        </HStack>
                    </VStack>
                </Card>
            </HStack>
        </Card>
    );
});
