import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './ScrollToolbar.module.scss';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ScrollToTopButton } from '@/features/scrollToTopButton';

interface ScrollToolbarProps {
    className?: string;
}

export const ScrollToolbar = memo((props: ScrollToolbarProps) => {
    const { className } = props;

    return (
        <VStack
            className={classNames(cl.scrollToolbar, {}, [className])}
            justify="center"
            align="center"
            max
        >
            <ScrollToTopButton />
        </VStack>
    );
});
