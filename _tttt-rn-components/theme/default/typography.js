import { Platform } from 'react-native';

export const typography = {
    primary: Platform.select({
        ios: 'Montserrat',
        android: 'Montserrat',
    }),
    secondary: Platform.select({
        ios: 'Montserrat',
        android: 'Montserrat',
    }),
};
