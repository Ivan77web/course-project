import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { ProfileRating } from '@/features/profileRating';
import { Text } from '@/shared/ui/deprecated/Text';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { id } = useParams<{ id: string }>();
    const profileId = __PROJECT__ !== 'storybook' ? id : '1';
    const { t } = useTranslation('profile');

    return (
        <Page data-testid="ProfilePage" className={classNames('', {}, [className])}>
            {
                profileId !== undefined
                    ? (
                        <VStack gap="16" max>
                            <EditableProfileCard id={profileId} />
                            <ProfileRating profileId={profileId} />
                        </VStack>
                    )
                    : <Text text={t('Профиль не найден')} />
            }
        </Page>
    );
});

export default ProfilePage;
