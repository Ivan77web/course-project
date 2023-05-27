import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './ScrollToTopButton.module.scss';
import { Icon } from '@/shared/ui/redesigned/Icon';
import scrollArrow from '@/shared/assets/icons/scrollArrow.svg';

interface ScrollToTopButtonProps {
    className?: string;
}

export const ScrollToTopButton = memo((props: ScrollToTopButtonProps) => {
    const { className } = props;

    const onClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Icon
            className={classNames(cl.ScrollToTopButton, {}, [className])}
            Svg={scrollArrow}
            width={32}
            height={32}
            clickable
            onClick={onClick}
        />
    );
});
