import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { UserRole } from '@/entities/User';
import { FeatureFlags } from '@/shared/types/featureFlags';

export interface NewUserSchema {
    username: string;
    password: string;
    roles: UserRole[];
    features: FeatureFlags[];
    avatar?: string;
    first?: string;
    lastname?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    freeUsername?: boolean;
    onSuccess?: boolean;
}
