import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import {
    getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile,
} from '@/shared/const/router';
import AboutIcon from '@/shared/assets/icons/about.svg';
import MainPageIcon from '@/shared/assets/icons/mainPage.svg';
import ProfilePageIcon from '@/shared/assets/icons/profile.svg';
import ArticlesIcon from '@/shared/assets/icons/articles.svg';
import AboutIconRedesigned from '@/shared/assets/icons/aboutRedesigned.svg';
import MainPageIconRedesigned from '@/shared/assets/icons/mainPageRedesigned.svg';
import ProfilePageIconRedesigned from '@/shared/assets/icons/profileRedesigned.svg';
import ArticlesIconRedesigned from '@/shared/assets/icons/articlesRedesigned.svg';
import { SidebarItemType } from '../types/sidebar';
import { toggleFeatures } from '@/shared/lib/features';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: getRouteMain(),
                text: 'Главная страница',
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => MainPageIconRedesigned,
                    off: () => MainPageIcon,
                }),
            },
            {
                path: getRouteAbout(),
                text: 'О сайте',
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => AboutIconRedesigned,
                    off: () => AboutIcon,
                }),
            },
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: getRouteProfile(userData.id),
                    text: 'Профиль',
                    Icon: toggleFeatures({
                        name: 'isAppRedesigned',
                        on: () => ProfilePageIconRedesigned,
                        off: () => ProfilePageIcon,
                    }),
                    authOnly: true,
                },
                {
                    path: getRouteArticles(),
                    text: 'Статьи',
                    Icon: toggleFeatures({
                        name: 'isAppRedesigned',
                        on: () => ArticlesIconRedesigned,
                        off: () => ArticlesIcon,
                    }),
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },
);
