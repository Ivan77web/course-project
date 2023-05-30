import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleType, ArticleView, ArticleBlockType } from '@/entities/Article';
import { ArticleInfinityList } from './ArticleInfinityList';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'pages/Articles/ArticleInfinityList',
    component: ArticleInfinityList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleInfinityList>;

const Template: ComponentStory<typeof ArticleInfinityList> = (args) => <ArticleInfinityList {...args} />;
const TemplateRedesigned: ComponentStory<typeof ArticleInfinityList> = () => (
    <div className="app_redesigned">
        <ArticleInfinityList />
    </div>
);

const defaultArticlesPage = {
    isLoading: false,
    view: ArticleView.SMALL,
    error: undefined,
    ids: ['1', '2', '3'],
    entities: {
        1: {
            id: '1',
            title: 'Javascript news',
            subtitle: 'Что нового в JS за 2022 год?',
            img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
            views: 1022,
            createdAt: '26.02.2022',
            user: {
                id: '1',
                username: 'admin',
                avatar: 'https://sun9-46.userapi.com/impf/c636025/v636025844/a573/cHHVCHMB_QY.jpg?size=1280x960&quality=96&sign=3e3880fb9450e9caf23de6fed5725486&type=album',
            },
            type: [ArticleType.IT],
            blocks: [
                {
                    id: '1',
                    type: ArticleBlockType.TEXT,
                    title: 'Заголовок этого блока',
                    paragraphs: [
                        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
                    ],
                },
                {
                    id: '4',
                    type: ArticleBlockType.CODE,
                    code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
                },
                {
                    id: '5',
                    type: ArticleBlockType.TEXT,
                    title: 'Заголовок этого блока',
                    paragraphs: [
                        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
                    ],
                },
            ],
        },
        2: {
            id: '2',
            title: 'Javascript news',
            subtitle: 'Что нового в JS за 2022 год?',
            img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
            views: 1022,
            createdAt: '26.02.2022',
            user: {
                id: '1',
                username: 'admin',
                avatar: 'https://sun9-46.userapi.com/impf/c636025/v636025844/a573/cHHVCHMB_QY.jpg?size=1280x960&quality=96&sign=3e3880fb9450e9caf23de6fed5725486&type=album',
            },
            type: [ArticleType.IT],
            blocks: [
                {
                    id: '1',
                    type: ArticleBlockType.TEXT,
                    title: 'Заголовок этого блока',
                    paragraphs: [
                        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
                    ],
                },
                {
                    id: '4',
                    type: ArticleBlockType.CODE,
                    code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
                },
                {
                    id: '5',
                    type: ArticleBlockType.TEXT,
                    title: 'Заголовок этого блока',
                    paragraphs: [
                        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
                    ],
                },
            ],
        },
        3: {
            id: '3',
            title: 'Javascript news',
            subtitle: 'Что нового в JS за 2022 год?',
            img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
            views: 1022,
            createdAt: '26.02.2022',
            user: {
                id: '1',
                username: 'admin',
                avatar: 'https://sun9-46.userapi.com/impf/c636025/v636025844/a573/cHHVCHMB_QY.jpg?size=1280x960&quality=96&sign=3e3880fb9450e9caf23de6fed5725486&type=album',
            },
            type: [ArticleType.IT],
            blocks: [
                {
                    id: '1',
                    type: ArticleBlockType.TEXT,
                    title: 'Заголовок этого блока',
                    paragraphs: [
                        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
                    ],
                },
                {
                    id: '4',
                    type: ArticleBlockType.CODE,
                    code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
                },
                {
                    id: '5',
                    type: ArticleBlockType.TEXT,
                    title: 'Заголовок этого блока',
                    paragraphs: [
                        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
                    ],
                },
            ],
        },
    },
};

export const NormalSmall = Template.bind({});
NormalSmall.args = {};
NormalSmall.decorators = [StoreDecorator({ articlesPage: defaultArticlesPage })];

export const NormalBig = Template.bind({});
NormalBig.args = {};
NormalBig.decorators = [StoreDecorator({ articlesPage: { ...defaultArticlesPage, view: ArticleView.BIG } })];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [StoreDecorator({
    articlesPage: {
        isLoading: false,
        view: ArticleView.BIG,
        error: 'error',
        ids: [],
        entities: {},
    },
})];

export const isLoading = Template.bind({});
isLoading.args = {};
isLoading.decorators = [StoreDecorator({
    articlesPage: {
        isLoading: true,
        view: ArticleView.BIG,
        error: undefined,
        ids: [],
        entities: {},
    },
})];

export const NormalSmallRedesigned = TemplateRedesigned.bind({});
NormalSmallRedesigned.args = {};
NormalSmallRedesigned.decorators = [
    StoreDecorator({ articlesPage: defaultArticlesPage }),
    NewDesignDecorator,
];

export const NormalBigRedesigned = TemplateRedesigned.bind({});
NormalBigRedesigned.args = {};
NormalBigRedesigned.decorators = [
    StoreDecorator({ articlesPage: { ...defaultArticlesPage, view: ArticleView.BIG } }),
    NewDesignDecorator,
];

export const ErrorRedesigned = TemplateRedesigned.bind({});
ErrorRedesigned.args = {};
ErrorRedesigned.decorators = [
    StoreDecorator({
        articlesPage: {
            isLoading: false,
            view: ArticleView.BIG,
            error: 'error',
            ids: [],
            entities: {},
        },
    }),
    NewDesignDecorator,
];

export const isLoadingRedesigned = Template.bind({});
isLoadingRedesigned.args = {};
isLoadingRedesigned.decorators = [
    StoreDecorator({
        articlesPage: {
            isLoading: true,
            view: ArticleView.BIG,
            error: undefined,
            ids: [],
            entities: {},
        },
    }),
    NewDesignDecorator,
];
