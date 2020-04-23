import { createStackNavigator } from 'react-navigation-stack';

export const RongIMStackNavigator = createStackNavigator(
    {
        CList: {
            path: 'c-list',
            screen: () => null,
        },
        CSubList: {
            path: 'c-sub-list',
            screen: () => null,
        },
        CItem: {
            path: 'c-item',
            screen: () => null,
        },
    },
    {},
);

RongIMStackNavigator.displayName = '融云IM路由';
