import {
    ReactNode, useEffect, useMemo, useState,
} from 'react';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { Theme } from '@/shared/const/theme';
import { useJsonSettings } from '@/entities/User';

interface ThemeProviderProps {
    initiallTheme?: Theme;
    children: ReactNode;
}

const ThemeProvider = (props: ThemeProviderProps) => {
    const {
        initiallTheme,
        children,
    } = props;
    const { theme: defaultTheme = Theme.LIGHT } = useJsonSettings();
    const [theme, setTheme] = useState<Theme>(initiallTheme || defaultTheme);
    const [isThemeInited, setThemeInited] = useState(false);

    useEffect(() => {
        if (!isThemeInited) {
            setTheme(defaultTheme);
            setThemeInited(true);
        }
    }, [defaultTheme, isThemeInited]);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
