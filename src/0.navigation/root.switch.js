import { createSwitchNavigator } from 'react-navigation';

import { MainTabNavigator } from './main.tab';

import { DemoScreen } from '../1.screens/demo-screen/demo-screen';

export const RootSwitchNavigator = createSwitchNavigator(
    {
        Login: {
            path: 'login',
            screen: DemoScreen,
        },
        Main: {
            path: 'main',
            screen: MainTabNavigator,
        },
    },
    {},
);

RootSwitchNavigator.displayName = '根';
