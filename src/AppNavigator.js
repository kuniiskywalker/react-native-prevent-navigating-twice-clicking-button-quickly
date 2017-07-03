import React, { Component } from "react";
import { Platform } from "react-native";
import { StackNavigator } from 'react-navigation';

import Home from './Home';
import MyPage from './MyPage';

const AppNavigator = StackNavigator(
    {
        Home: {
            screen: Home,
        },
        MyPage: {
            screen: MyPage,
        },
    },
    {
        navigationOptions: ({ navigation }) => ({
            header: null,
        }),
        transitionConfig: () => ({
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;

                const translateX = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [layout.initWidth, 0, 0]
                });

                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
                    outputRange: [0, 1, 1, 0.3, 0]
                });

                return { opacity, transform: [{ translateX }] }
            }
        })
    }
)
export default AppNavigator;