import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { useGetProfileRating, useRateProfile } from '../../api/profileRatingApi';

interface ProfileRatingProps {
    className?: string;
    profileId: string
}

export const ProfileRating = memo((props: ProfileRatingProps) => {
    const {
        className,
        profileId,
    } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);
    const isShow = profileId !== userData?.id;
    const { data, isLoading } = useGetProfileRating({
        userId: userData?.id ?? '',
        profileId,
    });
    const [rateProfileMutation] = useRateProfile();

    const onAccept = useCallback((starsCount: number) => {
        rateProfileMutation({
            userId: userData?.id ?? '',
            profileId,
            rate: starsCount,
        });
    }, [profileId, rateProfileMutation, userData?.id]);

    if (!isShow || isLoading) {
        return null;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            className={classNames('', {}, [className])}
            title={t('Оцените профиль')}
            hasFeedback={false}
            onAccept={onAccept}
            rate={rating?.rate}
        />
    );
});
