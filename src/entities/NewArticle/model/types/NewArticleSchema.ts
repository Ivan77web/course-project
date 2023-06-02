import { ArticleBlock, ArticleType } from '@/entities/Article';

export interface NewArticleSchema {
    title: string;
    subtitle: string;
    img: string;
    type: ArticleType[];
    blocks: ArticleBlock[]
}
