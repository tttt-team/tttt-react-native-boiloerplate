import { createBottomTabNavigator } from 'react-navigation-tabs';

import { RongIMStackNavigator } from './rongim.stack';

import index from '../1.screens/react-native-start-screen/react-native-start-screen';

export const MainTabNavigator = createBottomTabNavigator(
    {
        Index: {
            path: 'index',
            screen: index,
        },
        AliPlayer: {
            path: 'aliplayer',
            screen: () => null,
        },
        AliPush: {
            path: 'alipush',
            screen: () => null,
        },
        RongIM: {
            path: 'rongim',
            screen: RongIMStackNavigator,
        },
    },
    {},
);

MainTabNavigator.displayName = '主下选项卡导航';
