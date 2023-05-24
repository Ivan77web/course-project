import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Listbox as ListboxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Listbox } from '@/shared/ui/redesigned/Popups';
import { Currency } from '../../model/types/currency';
import { ToggleFeatures } from '@/shared/lib/features';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.EUR, content: Currency.EUR },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { t } = useTranslation('profile');
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    const propsComponent = {
        onChange: onChangeHandler,
        value,
        items: options,
        className,
        defaultValue: t('Ваша валюта'),
        readonly,
        direction: 'top right' as const,
        label: t('Ваша валюта'),
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<Listbox {...propsComponent} />}
            off={<ListboxDeprecated {...propsComponent} />}
        />
    );
});
