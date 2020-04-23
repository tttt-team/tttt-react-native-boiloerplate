import React from 'react';
import { Platform } from 'react-native';
import { KeyboardAvoidingView, ScrollView, View, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { offsets, presets, isNonScrolling } from './screen.presets';

const isIos = Platform.OS === 'ios';

const ScreenWithoutScrolling = props => {
    const preset = presets.fixed;
    const style = props.style || {};
    const backgroundStyle = props.backgroundColor ? { backgroundColor: props.backgroundColor } : {};
    const Wrapper = props.unsafe ? View : SafeAreaView;

    return (
        <KeyboardAvoidingView
            style={[preset.outer, backgroundStyle]}
            behavior={isIos ? 'padding' : null}
            keyboardVerticalOffset={offsets[props.keyboardOffset || 'none']}
        >
            <StatusBar barStyle={props.statusBar || 'light-content'} />
            <Wrapper style={[preset.inner, style]}>{props.children}</Wrapper>
        </KeyboardAvoidingView>
    );
};

const ScreenWithScrolling = props => {
    const preset = presets.scroll;
    const style = props.style || {};
    const backgroundStyle = props.backgroundColor ? { backgroundColor: props.backgroundColor } : {};
    const Wrapper = props.unsafe ? View : SafeAreaView;

    return (
        <KeyboardAvoidingView
            style={[preset.outer, backgroundStyle]}
            behavior={isIos ? 'padding' : null}
            keyboardVerticalOffset={offsets[props.keyboardOffset || 'none']}
        >
            <StatusBar barStyle={props.statusBar || 'light-content'} />
            <Wrapper style={[preset.outer, backgroundStyle]}>
                <ScrollView style={[preset.outer, backgroundStyle]} contentContainerStyle={[preset.inner, style]}>
                    {props.children}
                </ScrollView>
            </Wrapper>
        </KeyboardAvoidingView>
    );
};

export const Screen = props => {
    if (isNonScrolling(props.preset)) {
        return <ScreenWithoutScrolling {...props} />;
    } else {
        return <ScreenWithScrolling {...props} />;
    }
};
