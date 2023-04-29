import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Listbox } from 'shared/ui/Popups';
import { Country } from '../model/types/country';

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

    return (
        <Listbox
            onChange={onChangeHandler}
            value={value}
            items={options}
            className={classNames('', {}, [className])}
            defaultValue={t('Ваша страна')}
            readonly={readonly}
            direction="top right"
            label={t('Ваша страна')}
        />
    );
});
