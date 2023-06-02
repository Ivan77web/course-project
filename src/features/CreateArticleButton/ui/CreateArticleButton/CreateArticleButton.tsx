import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { getRouteArticleCreate } from '@/shared/const/router';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface CreateArticleButtonProps {
    className?: string;
}

export const CreateArticleButton = memo((props: CreateArticleButtonProps) => {
    const { className } = props;
    const { t } = useTranslation('articles');

    return (
        <Card
            max

        >
            <HStack
                justify="center"
            >
                <AppLink
                    to={getRouteArticleCreate()}
                >
                    {t('Создать статью')}
                </AppLink>
            </HStack>
        </Card>
    );
});
