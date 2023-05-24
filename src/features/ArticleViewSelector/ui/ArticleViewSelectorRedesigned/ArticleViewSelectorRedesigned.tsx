import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import TiledIcon from '@/shared/assets/icons/tiledRedesigned.svg';
import ListIcon from '@/shared/assets/icons/listRedesigned.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';
import cl from './ArticleViewSelectorRedesigned.module.scss';
import { ArticleView } from '@/entities/Article';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
];

export const ArticleViewSelectorRedesigned = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick(newView);
    };

    return (
        <Card
            className={classNames(cl.articleViewSelector, {}, [className])}
            border="roundBorder"
        >
            <HStack gap="8">
                {viewTypes.map((viewType) => (
                    <Icon
                        clickable
                        onClick={onClick(viewType.view)}
                        Svg={viewType.icon}
                        className={classNames('', { [cl.notSelected]: viewType.view !== view }, [])}
                    />
                ))}
            </HStack>
        </Card>
    );
});
