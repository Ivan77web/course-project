import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './StarRating.module.scss';
import Star from '@/shared/assets/icons/star.svg';
import { Icon } from '../Icon/Icon';

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void,
    size?: number,
    selectedStars?: number,
}

const stars = [1, 2, 3, 4, 5];

/**
 * @deprecated
 */

export const StarRating = memo((props: StarRatingProps) => {
    const {
        className,
        onSelect,
        size = 30,
        selectedStars = 0,
    } = props;

    const [currentStarCount, setCurrentStarCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <div className={classNames(cl.starRating, {}, [className])}>
            {
                stars.map((starNumber) => (
                    <Icon
                        className={
                            classNames(
                                cl.starIcon,
                                { [cl.selected]: isSelected },
                                [currentStarCount >= starNumber ? cl.hovered : cl.normal],
                            )
                        }
                        Svg={Star}
                        key={starNumber}
                        width={size}
                        height={size}
                        onMouseLeave={onLeave}
                        onMouseEnter={onHover(starNumber)}
                        onClick={onClick(starNumber)}
                        data-testid={`StarRating.${starNumber}`}
                        data-selected={currentStarCount >= starNumber}
                    />
                ))
            }
        </div>
    );
});
