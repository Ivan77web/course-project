import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Listbox as ListboxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Listbox } from '@/shared/ui/redesigned/Popups';
import { Country } from '../model/types/country';
import { ToggleFeatures } from '@/shared/lib/features';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { t } = useTranslation('profile');
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    const options = [
        { value: Country.Russia, content: t(Country.Russia) },
        { value: Country.USA, content: t(Country.USA) },
        { value: Country.Ukraine, content: t(Country.Ukraine) },
        { value: Country.Belarus, content: t(Country.Belarus) },
        { value: Country.Kazakhstan, content: t(Country.Kazakhstan) },
    ];

    const propsComponent = {
        onChange: onChangeHandler,
        value,
        items: options,
        className,
        defaultValue: t('Ваша страна'),
        readonly,
        direction: 'top right' as const,
        label: t('Ваша страна'),
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<Listbox {...propsComponent} />}
            off={<ListboxDeprecated {...propsComponent} />}
        />
    );
});
