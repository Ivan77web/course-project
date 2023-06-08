import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';
import { getUserAuthData } from '@/entities/User';
import {
    getNewArticleTitle, getNewArticleSubtitle, getNewArticleImg, getNewArticleType, getNewArticleBlocks,
} from '@/entities/NewArticle';

export const addArticle = createAsyncThunk<
    Article,
    void,
    ThunkConfig<string>
>(
    'ArticleEditPage/addArticle',
    async (_, thunkApi) => {
        const {
            extra,
            rejectWithValue,
            getState,
            dispatch,
        } = thunkApi;

        const title = getNewArticleTitle(getState());
        const subtitle = getNewArticleSubtitle(getState());
        const img = getNewArticleImg(getState());
        const type = getNewArticleType(getState());
        const blocks = getNewArticleBlocks(getState());
        const authData = getUserAuthData(getState());

        const getDate = () => {
            const Data = new Date();
            const Year = String(Data.getFullYear());
            let Month = String(Data.getMonth());
            let Day = String(Data.getDate());

            if (Day.length < 2) {
                Day = `0${Day}`;
            }

            if (Month.length < 2) {
                Month = `0${Month}`;
            }

            return `${Day}:${Month}:${Year}`;
        };

        if (
            !title
            || !subtitle
            || !img
            || !type
            || !blocks
            || !authData
        ) {
            return rejectWithValue('no data');
        }

        try {
            const response = await extra.api.post<Article>('/articles', {
                title,
                subtitle,
                img,
                views: 0,
                createdAt: getDate(),
                userId: authData.id,
                type,
                blocks,
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { ThunkConfig } from '@/app/providers/StoreProvider';
// import { getArticleDetailsData } from '@/entities/Article';
// import { Comment } from '@/entities/Comment';
// import { getUserAuthData } from '@/entities/User';

// export const addArticle = createAsyncThunk<
//     Comment,
//     string,
//     ThunkConfig<string>
// >(
//     'articleDetails/addCommentForArticle',
//     async (text, thunkApi) => {
//         const {
//             dispatch,
//             extra,
//             rejectWithValue,
//             getState,
//         } = thunkApi;

//         const userData = getUserAuthData(getState());
//         const article = getArticleDetailsData(getState());

//         if (!userData || !text || !article) {
//             return rejectWithValue('no data');
//         }

//         try {
//             const response = await extra.api.post<Comment>('/comments', {
//                 articleId: article.id,
//                 userId: userData.id,
//                 text,
//             });

//             if (!response.data) {
//                 throw new Error();
//             }

//             dispatch(fetchCommentsByArticleId(article.id));

//             return response.data;
//         } catch (e) {
//             return rejectWithValue('error');
//         }
//     },
// );
