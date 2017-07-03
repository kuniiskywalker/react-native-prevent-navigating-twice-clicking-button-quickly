import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text,
    View
} from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => {
                        setTimeout(() => {
                                this.props.navigation.navigate('MyPage');
                            }, 1000)
                        }
                    }
                    style={{
                        backgroundColor: '#ccc',
                        height: 50,
                        padding: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 10,
                    }}>
                    <Text>
                        Tap quickly twice!
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}