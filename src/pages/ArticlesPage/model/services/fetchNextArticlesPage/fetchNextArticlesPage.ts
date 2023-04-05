import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlePageHasMore, getArticlePageIsLoading, getArticlePageLimit, getArticlePagePage,
} from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/fetchNextArticlesPage',
    async (_, thunkApi) => {
        const {
            extra, rejectWithValue, getState, dispatch,
        } = thunkApi;
        const hasMore = getArticlePageHasMore(getState());
        const page = getArticlePagePage(getState());
        const isLoading = getArticlePageIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(page + 1));
            dispatch(fetchArticlesList({}));
        }
    },
);
