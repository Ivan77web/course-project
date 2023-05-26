import {
    memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { StarRating } from '@/shared/ui/redesigned/StarRating';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Button } from '@/shared/ui/redesigned/Button';
import { Drawer } from '@/shared/ui/redesigned/Drawer';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCardRedesigned = memo((props: RatingCardProps) => {
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept,
        rate = 0,
    } = props;
    const { t } = useTranslation('ratingCard');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);

        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFeedback, onAccept]);

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [onAccept, starsCount, feedback]);

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input
                value={feedback}
                onChange={setFeedback}
                placeholder={t('Ваш отзыв')}
                data-testid="RatingCard.Input"
            />
        </>
    );

    return (
        <Card padding="24" border="roundBorder" className={classNames('', {}, [className])} max data-testid="RatingCard">
            <VStack gap="8" align="center">
                <Text title={starsCount ? t('Спасибо за оценку!') : title} />
                <StarRating selectedStars={rate} size={40} onSelect={onSelectStars} />
            </VStack>

            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    <VStack max gap="32">
                        {modalContent}
                        <HStack max gap="16" justify="end">
                            <Button
                                data-testid="RatingCard.Close"
                                onClick={cancelHandle}
                                variant="outline"
                            >
                                {t('Закрыть')}
                            </Button>
                            <Button
                                data-testid="RatingCard.Send"
                                onClick={acceptHandle}
                            >
                                {t('Отправить')}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>

            <MobileView>
                <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
                    <VStack max gap="32">
                        {modalContent}
                        <Button fullWidth onClick={acceptHandle} size="l">
                            {t('Отправить')}
                        </Button>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>

    );
});
