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
        setTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
        },
        setSubtitle: (state, action: PayloadAction<string>) => {
            state.subtitle = action.payload;
        },
        addBlock: (state, action: PayloadAction<ArticleBlock>) => {
            state.blocks.push(action.payload);
        },
        setType: (state, action: PayloadAction<ArticleType[]>) => {
            state.type = action.payload;
        },
        setImg: (state, action: PayloadAction<string>) => {
            state.img = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: NewArticleActions } = NewArticleSlice;
export const { reducer: NewArticleReducer } = NewArticleSlice;
