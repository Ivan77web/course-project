import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Article } from '../../model/types/article';
import { ArticleView } from '../../model/consts/consts';
import { ArticleListRedesigned } from './ArticleListRedesigned';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'entities/Article/ArticleList/ArticleListRedesigned',
    component: ArticleListRedesigned,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleListRedesigned>;

const Template: ComponentStory<typeof ArticleListRedesigned> = (args) => <div className="app_redesigned"><ArticleListRedesigned {...args} /></div>;

/* eslint-disable max-len */
const articleTest = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    user: {
        id: '1',
        username: 'Admin',
        avatar: 'https://sun9-36.userapi.com/impg/c855220/v855220920/217645/M_4Hrk9SIZ4.jpg?size=723x1080&quality=96&sign=907eeb1184d759743dc91b92133cc94a&type=album',
    },
    type: [
        'IT',
    ],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '4',
            type: 'CODE',
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '5',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '2',
            type: 'IMAGE',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта',
        },
        {
            id: '3',
            type: 'CODE',
            code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
        },
        {
            id: '7',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '8',
            type: 'IMAGE',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта',
        },
        {
            id: '9',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
            ],
        },
    ],
} as Article;

export const BigNormal = Template.bind({});
BigNormal.args = {
    isLoading: false,
    articles: new Array(3).fill(0).map((item, index) => ({ ...articleTest, id: String(index) })),
    view: ArticleView.BIG,
};
BigNormal.decorators = [ThemeDecorator(Theme.LIGHT), NewDesignDecorator];

export const BigDark = Template.bind({});
BigDark.args = {
    isLoading: false,
    articles: new Array(3).fill(0).map((item, index) => ({ ...articleTest, id: String(index) })),
    view: ArticleView.BIG,
};
BigDark.decorators = [ThemeDecorator(Theme.DARK), NewDesignDecorator];

export const BigGray = Template.bind({});
BigGray.args = {
    isLoading: false,
    articles: new Array(3).fill(0).map((item, index) => ({ ...articleTest, id: String(index) })),
    view: ArticleView.BIG,
};
BigGray.decorators = [ThemeDecorator(Theme.GRAY), NewDesignDecorator];

export const BigNormalIsLoading = Template.bind({});
BigNormalIsLoading.args = {
    isLoading: true,
    view: ArticleView.BIG,
};
BigNormalIsLoading.decorators = [ThemeDecorator(Theme.LIGHT), NewDesignDecorator];

export const BigDarkIsLoading = Template.bind({});
BigDarkIsLoading.args = {
    isLoading: true,
    view: ArticleView.BIG,
};
BigDarkIsLoading.decorators = [ThemeDecorator(Theme.DARK), NewDesignDecorator];

export const BigGrayIsLoading = Template.bind({});
BigGrayIsLoading.args = {
    isLoading: true,
    view: ArticleView.BIG,
};
BigGrayIsLoading.decorators = [ThemeDecorator(Theme.GRAY), NewDesignDecorator];

export const SmallNormal = Template.bind({});
SmallNormal.args = {
    isLoading: false,
    articles: new Array(9).fill(0).map((item, index) => ({ ...articleTest, id: String(index) })),
    view: ArticleView.SMALL,
};
SmallNormal.decorators = [ThemeDecorator(Theme.LIGHT), NewDesignDecorator];

export const SmallDark = Template.bind({});
SmallDark.args = {
    isLoading: false,
    articles: new Array(9).fill(0).map((item, index) => ({ ...articleTest, id: String(index) })),
    view: ArticleView.SMALL,
};
SmallDark.decorators = [ThemeDecorator(Theme.DARK), NewDesignDecorator];

export const SmallGray = Template.bind({});
SmallGray.args = {
    isLoading: false,
    articles: new Array(9).fill(0).map((item, index) => ({ ...articleTest, id: String(index) })),
    view: ArticleView.SMALL,
};
SmallGray.decorators = [ThemeDecorator(Theme.GRAY), NewDesignDecorator];

export const SmallNormalIsLoading = Template.bind({});
SmallNormalIsLoading.args = {
    isLoading: true,
    view: ArticleView.SMALL,
};
SmallNormalIsLoading.decorators = [ThemeDecorator(Theme.LIGHT), NewDesignDecorator];

export const SmallDarkIsLoading = Template.bind({});
SmallDarkIsLoading.args = {
    isLoading: true,
    view: ArticleView.SMALL,
};
SmallDarkIsLoading.decorators = [ThemeDecorator(Theme.DARK), NewDesignDecorator];

export const SmallGrayIsLoading = Template.bind({});
SmallGrayIsLoading.args = {
    isLoading: true,
    view: ArticleView.SMALL,
};
SmallGrayIsLoading.decorators = [ThemeDecorator(Theme.GRAY), NewDesignDecorator];
