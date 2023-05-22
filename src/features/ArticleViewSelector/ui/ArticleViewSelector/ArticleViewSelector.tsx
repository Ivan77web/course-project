import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import TiledIcon from '@/shared/assets/icons/tiled.svg';
import ListIcon from '@/shared/assets/icons/list.svg';
import { Button, ThemeButton } from '@/shared/ui/deprecated/Button';
import { Icon } from '@/shared/ui/deprecated/Icon';
import cl from './ArticleViewSelector.module.scss';
import { ArticleView } from '@/entities/Article';

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

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick(newView);
    };

    return (
        <div className={classNames(cl.articleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    theme={ThemeButton.CLEAR}
                    onClick={onClick(viewType.view)}
                    key={viewType.view}
                >
                    <Icon
                        width={24}
                        height={24}
                        Svg={viewType.icon}
                        className={classNames('', { [cl.notSelected]: viewType.view !== view }, [])}
                    />
                </Button>
            ))}
        </div>
    );
});
