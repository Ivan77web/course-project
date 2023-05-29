import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ArticleBlockType } from '../../model/consts/consts';
import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';
import { ArticleTextBlock } from '../../model/types/article';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
    title: 'entities/Article/ArticleTextBlock',
    component: ArticleTextBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleTextBlockComponent>;

const Template: ComponentStory<typeof ArticleTextBlockComponent> = (args) => <ArticleTextBlockComponent {...args} />;

const defaultBLock: ArticleTextBlock = {
    id: '1',
    type: ArticleBlockType.TEXT,
    title: 'Заголовок этого блока',
    paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
    ],
};

export const Normal = Template.bind({});
Normal.args = {
    block: defaultBLock,
};

export const Dark = Template.bind({});
Dark.args = {
    block: defaultBLock,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Gray = Template.bind({});
Gray.args = {
    block: defaultBLock,
};
Gray.decorators = [ThemeDecorator(Theme.GRAY)];

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = {
    block: defaultBLock,
};
NormalRedesigned.decorators = [NewDesignDecorator];

export const DarkRedesigned = Template.bind({});
DarkRedesigned.args = {
    block: defaultBLock,
};
DarkRedesigned.decorators = [
    ThemeDecorator(Theme.DARK),
    NewDesignDecorator,
];

export const GrayRedesigned = Template.bind({});
GrayRedesigned.args = {
    block: defaultBLock,
};
GrayRedesigned.decorators = [
    ThemeDecorator(Theme.GRAY),
    NewDesignDecorator,
];
