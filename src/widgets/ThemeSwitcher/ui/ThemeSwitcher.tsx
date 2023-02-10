import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cl from './ThemeSwitcher.module.scss';
import LightIcon from '../assets/icons/theme-light.svg';
import DarkIcon from '../assets/icons/theme-dark.svg';

interface ThemeSwitherProps {
    className?: string;
}

export const ThemeSwither = ({ className }: ThemeSwitherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames(cl.ThemeSwither, {}, [className])}
        >
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
};
