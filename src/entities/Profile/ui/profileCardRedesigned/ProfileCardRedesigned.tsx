import { useTranslation } from 'react-i18next';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/redesigned/Input';
import { Text } from '@/shared/ui/redesigned/Text';
import { Country, CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Profile } from '../../model/types/profile';
import cl from './ProfileCardRedesigned.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCountry?: (country: Country) => void;
    onChangeCity?: (value: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeLinkOnAvatar?: (value: string) => void;
    readOnly?: boolean;
}

export const ProfileCardRedesigned = (props: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const {
        className,
        data,
        isLoading,
        error,
        onChangeFirstname,
        onChangeLastname,
        onChangeUsername,
        onChangeAge,
        onChangeCountry,
        onChangeCity,
        onChangeCurrency,
        onChangeLinkOnAvatar,
        readOnly = true,
    } = props;

    if (isLoading) {
        return (
            <Card padding="24" max>
                <VStack gap="32">
                    <HStack max justify="center">
                        <Skeleton border="100%" width={128} height={128} />
                    </HStack>
                    <HStack gap="32" max>
                        <VStack gap="16" max>
                            <Skeleton width="100%" height={38} />
                            <Skeleton width="100%" height={38} />
                            <Skeleton width="100%" height={38} />
                            <Skeleton width="100%" height={38} />
                        </VStack>

                        <VStack gap="16" max>
                            <Skeleton width="100%" height={38} />
                            <Skeleton width="100%" height={38} />
                            <Skeleton width="100%" height={38} />
                            <Skeleton width="100%" height={38} />
                        </VStack>
                    </HStack>
                </VStack>
            </Card>
        );
    }

    if (error) {
        return (
            <HStack justify="center" max>
                <Text
                    variant="error"
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align="center"
                />
            </HStack>
        );
    }

    return (
        <Card
            padding="24"
            max
            className={classNames(cl.ProfileCard, {}, [className])}
        >
            <VStack gap="32">
                {data?.avatar && (
                    <HStack justify="center" max>
                        <Avatar size={128} src={data?.avatar} />
                    </HStack>
                )}
                <HStack gap="24" max>
                    <VStack gap="16" max>
                        <Input
                            value={data?.first}
                            label={t('Имя')}
                            className={cl.input}
                            onChange={onChangeFirstname}
                            readOnly={readOnly}
                            data-testid="ProfileCard.Firstname"
                        />
                        <Input
                            value={data?.lastname}
                            label={t('Фамилия')}
                            className={cl.input}
                            onChange={onChangeLastname}
                            readOnly={readOnly}
                            data-testid="ProfileCard.Lastname"
                        />
                        <Input
                            value={data?.username}
                            label={t('Username')}
                            className={cl.input}
                            onChange={onChangeUsername}
                            readOnly={readOnly}
                            data-testid="ProfileCard.Username"
                        />
                        <Input
                            value={data?.age}
                            label={t('Возраст')}
                            className={cl.input}
                            onChange={onChangeAge}
                            readOnly={readOnly}
                            data-testid="ProfileCard.Age"
                        />
                    </VStack>

                    <VStack gap="16" max>
                        <Input
                            value={data?.city}
                            label={t('Город')}
                            className={cl.input}
                            onChange={onChangeCity}
                            readOnly={readOnly}
                            data-testid="ProfileCard.City"
                        />
                        <Input
                            value={data?.avatar}
                            label={t('Ссылка аватар')}
                            className={cl.input}
                            onChange={onChangeLinkOnAvatar}
                            readOnly={readOnly}
                            data-testid="ProfileCard.LinkAvatar"
                        />
                        <CurrencySelect
                            className={cl.input}
                            value={data?.currency}
                            onChange={onChangeCurrency}
                            readonly={readOnly}
                            data-testid="ProfileCard.Currency"
                        />
                        <CountrySelect
                            className={cl.input}
                            value={data?.country}
                            onChange={onChangeCountry}
                            readonly={readOnly}
                            data-testid="ProfileCard.Country"
                        />
                    </VStack>
                </HStack>
            </VStack>
        </Card>
    );
};
