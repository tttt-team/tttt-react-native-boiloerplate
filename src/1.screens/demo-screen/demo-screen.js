import React from 'react';
import { View, Text } from 'react-native';

import { NativeRouter, Route } from 'react-router-native';

// <%= 模版 %>
import { Screen } from '../../../_tttt-rn-components/components/screen/screen';

export const DemoScreen = props => {
    return (
        <Screen>
            <NativeRouter>
                <View>
                    <Text>view port应该解决方向和布局问题</Text>
                    <View>
                        <Text>这里嵌套view port1111</Text>
                    </View>
                    <View>
                        <Text>这里放置page router. 通过page router配置，循环创建多个Route</Text>
                        <PageRouter match={{ params: {}, url: props.navigation.state.routeName }} />
                    </View>
                </View>
            </NativeRouter>
        </Screen>
    );
};

const PageRouter = props => {
    console.log(props.match);
    return null;
};
