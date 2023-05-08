## Сущность Article

Описание - сущность статьи содержит в себе все данные о статье (isLoading, data, error) 

##### Данные о статье (data)
1)  id: string (id статьи)
2)  title: string (заголовок статьи)
3)  subtitle: string (подзаголовок статьи)
4)  user: User (автор статьи)
5)  img: string (иконка статьи)
6)  views: number (количество просмотров)
7)  createdAt: string (дата создания)
8)  type: ArticleType[] (тип статьи)
9)  blocks: ArticleBlock[] (блоки)

---

## Public API

1)  ArticleCodeBlockComponent
2)  ArticleDetails
3)  ArticleImageBlockComponent
4)  ArticleList
5)  ArticleListItem
6)  ArticleTextBlockComponent
7)  ArticleTypeTabs
8)  ArticleViewSelector