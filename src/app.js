import React, { useState, useEffect } from 'react';

import { includes } from 'ramda';

import { AppContainer } from './0.navigation';

// const canExit = routeName => {
//     includes(routeName, []);
// };

export const App = () => {
    // const [rootStore, setRootStore] = useState(undefined);
    //
    // useEffect(() => {
    //     setupRootStore().then(setRootStore);
    // }, []);
    //
    // if (!rootStore) {
    //     return null;
    // }

    return (
        <AppContainer />
    );
    // return (
    //     <RootStoreProvider value={rootStore}>
    //         <BackButtonHandler canExit={canExit}>
    //             <StatefulNavigator />
    //         </BackButtonHandler>
    //     </RootStoreProvider>
    // );
};
