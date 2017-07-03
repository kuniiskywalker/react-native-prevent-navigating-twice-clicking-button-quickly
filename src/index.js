import { AppRegistry, Component } from 'react-native';
import { createStore } from 'redux';
import React from 'react'
import { Provider } from 'react-redux';

import AppNavigator from './AppNavigator';

export default class Main extends React.Component {
    render() {
        return (
            <Provider>
                <AppNavigator />
            </Provider>
        )
    }
}