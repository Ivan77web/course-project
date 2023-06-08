import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewArticleSchema } from '../types/NewArticleSchema';
import { ArticleBlock, ArticleType } from '@/entities/Article';

const initialState: NewArticleSchema = {
    title: 'Новая статья',
    subtitle: 'О чем будет статья?',
    img: '',
    type: [ArticleType.ALL],
    blocks: [],
};

export const NewArticleSlice = createSlice({
    name: 'NewArticle',
    initialState,
    reducers: {
        reset: (state) => {
            state.title = 'Новая статья';
            state.subtitle = 'О чем будет статья?';
            state.img = '';
            state.type = [ArticleType.ALL];
            state.blocks = [];
        },
        setTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
        },
        setSubtitle: (state, action: PayloadAction<string>) => {
            state.subtitle = action.payload;
        },
        addBlock: (state, action: PayloadAction<ArticleBlock>) => {
            state.blocks.push(action.payload);
        },
        removeBlock: (state, action: PayloadAction<string>) => {
            state.blocks = state.blocks.filter((block) => block.id !== action.payload);
        },
        setType: (state, action: PayloadAction<ArticleType[]>) => {
            state.type = action.payload;
        },
        setImg: (state, action: PayloadAction<string>) => {
            state.img = action.payload;
        },
    },
});

export const { actions: NewArticleActions } = NewArticleSlice;
export const { reducer: NewArticleReducer } = NewArticleSlice;
