import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './PageError.module.scss';
import reloadIcon from './reloadIcon.png';
import logoGif from './errorGif.gif';

interface PageErrorProps {
    className?: string;
}

export const PageError = memo(({ className }: PageErrorProps) => {
    const { t, i18n } = useTranslation('pageError');

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cl.PageError, {}, [className])}>
            <div className={classNames(cl.textBlock, {}, [])}>
                <p
                    className={
                        classNames(i18n.language === 'ru' ? cl.textRu : cl.textEn, {}, [className])
                    }
                >
                    {t('Упс, произошла ошибка')}
                </p>
            </div>

            <img className={classNames(cl.logoGif, {}, [])} src={logoGif} />

            <div className={classNames(cl.reloadButton, {}, [])}>
                <img
                    className={classNames(cl.reloadButtonIcon, {}, [])}
                    onClick={reloadPage}
                    src={reloadIcon}
                />
            </div>
        </div>
    );
});
