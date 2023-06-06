import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const MainPage = memo(() => {
    const { t } = useTranslation('main');

    // const tabs = [
    //     { value: '1', content: <p>1</p> },
    //     { value: '2', content: <p>2</p> },
    //     { value: '3', content: <p>3</p> },
    // ];

    // const [valueTest, setValue] = useState<string[]>(['1', '2']);

    // const onTabClick = (value: string) => {
    //     let arr = [...valueTest];

    //     if (valueTest.includes(value)) {
    //         const myIndex = valueTest.indexOf(value);
    //         arr.splice(myIndex, 1);
    //     } else {
    //         arr = [...valueTest, value];
    //     }

    //     setValue(arr);
    // };

    return (
        <Page data-testid="MainPage">
            {t('Главная страница')}
            {/* <MultipleTabs
                tabs={tabs}
                value={valueTest}
                onTabClick={(value) => onTabClick(value.value)}
            /> */}
        </Page>
    );
});

export default MainPage;
