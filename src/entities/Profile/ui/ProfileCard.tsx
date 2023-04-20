import { useTranslation } from 'react-i18next';
import { Currency, CurrencySelect } from 'entities/Currency';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Country, CountrySelect } from 'entities/Country';
import { HStack, VStack } from 'shared/ui/Stack';
import { Profile } from '../model/types/profile';
import cl from './ProfileCard.module.scss';

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

export const ProfileCard = (props: ProfileCardProps) => {
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

    const mods: Mods = {
        [cl.editing]: !readOnly,
    };

    if (isLoading) {
        return (
            <HStack justify="center" max className={classNames(cl.ProfileCard, {}, [className, cl.loading])}>
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack justify="center" max className={classNames(cl.ProfileCard, {}, [className, cl.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                />
            </HStack>
        );
    }

    return (
        <VStack gap="8" max className={classNames(cl.ProfileCard, mods, [className])}>
            {
                data?.avatar
                && (
                    <HStack justify="center" max className={cl.avatarWrapper}>
                        <Avatar size={100} src={data?.avatar} />
                    </HStack>
                )
            }
            <Input
                value={data?.first}
                placeholder={t('Ваше имя')}
                className={cl.input}
                onChange={onChangeFirstname}
                readOnly={readOnly}
                data-testid="ProfileCard.Firstname"
            />
            <Input
                value={data?.lastname}
                placeholder={t('Ваша фамилия')}
                className={cl.input}
                onChange={onChangeLastname}
                readOnly={readOnly}
                data-testid="ProfileCard.Lastname"
            />
            <Input
                value={data?.username}
                placeholder={t('Ваш username')}
                className={cl.input}
                onChange={onChangeUsername}
                readOnly={readOnly}
                data-testid="ProfileCard.Username"
            />
            <Input
                value={data?.age}
                placeholder={t('Ваш возраст')}
                className={cl.input}
                onChange={onChangeAge}
                readOnly={readOnly}
                data-testid="ProfileCard.Age"
            />
            <Input
                value={data?.city}
                placeholder={t('Ваш город')}
                className={cl.input}
                onChange={onChangeCity}
                readOnly={readOnly}
                data-testid="ProfileCard.City"
            />
            <Input
                value={data?.avatar}
                placeholder={t('Ссылка на ваш аватар')}
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
    );
};
