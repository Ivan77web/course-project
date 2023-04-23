import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const AdminPanelPage = memo(() => {
    const { t } = useTranslation('adminPanel');

    return (
        <Page>
            {
                t('Страница админа')
            }
        </Page>
    );
});

export default AdminPanelPage;
