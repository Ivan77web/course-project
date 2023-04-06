import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleType } from 'entities/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import {
    getArticlePageLimit,
    getArticlePageOrder,
    getArticlePagePage,
    getArticlePageSearch,
    getArticlePageSort,
    getArticlePageType,
} from '../../selectors/articlesPageSelectors';

interface fetchArticlesListProps {
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<Article[], fetchArticlesListProps, ThunkConfig<string>>(
    'articlesPage/fetchArticlesList',
    async (props, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        const limit = getArticlePageLimit(getState());
        const order = getArticlePageOrder(getState());
        const sort = getArticlePageSort(getState());
        const search = getArticlePageSearch(getState());
        const page = getArticlePagePage(getState());
        const type = getArticlePageType(getState());

        try {
            addQueryParams({
                sort, order, search, type,
            });

            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    q: search,
                    type_like: type === ArticleType.ALL ? undefined : type,
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error2');
        }
    },
);
