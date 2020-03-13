import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    TouchableHighlight,
    Keyboard
} from 'react-native';
import Colors from '../constants/Colors'
import Toast, { DURATION } from 'react-native-easy-toast';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';


export default class MyStopwatch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isTimerStart: false,
            isStopwatchStart: false,
            timerDuration: 90000,
            resetTimer: false,
            resetStopwatch: false,

        };
        this.startStopTimer = this.startStopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.startStopStopWatch = this.startStopStopWatch.bind(this);
        this.resetStopwatch = this.resetStopwatch.bind(this);
    }

    startStopTimer() {
        this.setState({ isTimerStart: !this.state.isTimerStart, resetTimer: false });
    }
    resetTimer() {
        this.setState({ isTimerStart: false, resetTimer: true });
    }
    startStopStopWatch() {
        this.setState({ isStopwatchStart: !this.state.isStopwatchStart, resetStopwatch: false });
    }
    resetStopwatch() {
        this.setState({ isStopwatchStart: false, resetStopwatch: true });
    }
    getFormattedTime(time) {
        this.currentTime = time;
    }
    static navigationOptions = {
        headerTitle: 'Stopwatch',
        headerStyle: {

            backgroundColor: Colors.primaryColor
        },
        headerTintColor: 'white'
    };



    render() {

        return (

            <View style={styles.screen}>
                    <Stopwatch laps msecs
                        start={this.state.isStopwatchStart}
                        //To start
                        reset={this.state.resetStopwatch}
                        //To reset
                        styles={styles.stopwatchStyle}
                    //options for the styling
                    // getTime={this.getFormattedTime} 

                    />
                    <TouchableOpacity style={styles.btnStyle} onPress={this.startStopStopWatch}>
                        <Text style={styles.textStyle}>
                            {!this.state.isStopwatchStart ? "START" : "STOP"}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnStyle} onPress={this.resetStopwatch}>
                        <Text style={styles.textStyle} >RESET</Text>
                    </TouchableOpacity>
            </View>
        );

    }
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: Colors.bgColor,
        padding: 8,
        alignItems: 'center'

    },
    btnStyle: {

        backgroundColor: Colors.primaryColor,
        borderRadius: 5,
        height: 48,
        width:96,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 8,
        marginBottom: 8
    },
    textStyle: {
        color: "white"
    },
    stopwatchStyle:{

        backgroundColor:Colors.primaryColor
    }

});
