import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { Profile } from '../../model/types/profile';
import { ToggleFeatures } from '@/shared/lib/features';
import { ProfileCardDeprecated } from '../profileCardDeprecated/ProfileCardDeprecated';
import { ProfileCardRedesigned } from '../profileCardRedesigned/ProfileCardRedesigned';

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
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ProfileCardRedesigned {...props} />}
            off={<ProfileCardDeprecated {...props} />}
        />
    );
};
