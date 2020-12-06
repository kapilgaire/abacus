import React, { Component } from 'react';
import {
    Text,
    Easing,
    Animated,
} from 'react-native';

export default class ShakingText extends Component {
    componentWillMount() {
        this._shake = new Animated.Value(0);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.children !== nextProps.children) {
            this.shake();
        }
    }

    shake = () => {
        this._shake.setValue(0);
        Animated.spring(this._shake, {
            //   toValue: 1,
            //   friction: 3,
            //   tension: 10,
            duration: 400,
            toValue: 3,
            ease: Easing.bounce
        }).start(() => {
            this._shake.setValue(0);
        });
    };

    render() {
        const animatedStyle = {
            transform: [
                // {
                //     translateY: this._shake.interpolate({
                //         inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
                //         outputRange: [0, -15, 0, 15, 0, -15, 0],
                //     }),
                // },
                {
                    translateX: this._shake.interpolate({
                        inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
                        outputRange: [0, -10, 0, 10, 0, -10, 0],
                    }),
                },
            ],
        };

        return (
            <Animated.Text
                {...this.props}
                style={[animatedStyle, this.props.style]}
            />
        );

    }
}