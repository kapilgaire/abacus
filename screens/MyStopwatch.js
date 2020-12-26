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
import StopwatchLapList from '../screens/StopwatchLapList';


export default class MyStopwatch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // isTimerStart: false,
            // isStopwatchStart: false,
            // timerDuration: 90000,
            // resetTimer: false,
            // resetStopwatch: false,


            min: 0,
            sec: 0,
            msec: 0


        };

        this.lapArr = [];

        this.interval = null;

        // this.startStopTimer = this.startStopTimer.bind(this);
        // this.resetTimer = this.resetTimer.bind(this);
        // this.startStopStopWatch = this.startStopStopWatch.bind(this);
        // this.resetStopwatch = this.resetStopwatch.bind(this);
    }

    // startStopTimer() {
    //     this.setState({ isTimerStart: !this.state.isTimerStart, resetTimer: false });
    // }
    // resetTimer() {
    //     this.setState({ isTimerStart: false, resetTimer: true });
    // }
    // startStopStopWatch() {
    //     this.setState({ isStopwatchStart: !this.state.isStopwatchStart, resetStopwatch: false });
    // }
    // resetStopwatch() {
    //     this.setState({ isStopwatchStart: false, resetStopwatch: true });
    // }
    // getFormattedTime(time) {
    //     // this.currentTime = time;
    //     console.log(time)
    // }


    handleToggle = () => {
        this.setState(
            {
                start: !this.state.start
            },
            () => this.handleStart()
        );
    };

    handleLap = (min, sec, msec) => {
        this.lapArr = [
            ...this.lapArr,
            { min, sec, msec }
        ]

    };

    handleStart = () => {
        if (this.state.start) {
            this.interval = setInterval(() => {
                if (this.state.msec !== 99) {
                    this.setState({
                        msec: this.state.msec + 1
                    });
                } else if (this.state.sec !== 59) {
                    this.setState({
                        msec: 0,
                        sec: ++this.state.sec
                    });
                } else {
                    this.setState({
                        msec: 0,
                        sec: 0,
                        min: ++this.state.min
                    });
                }
            }, 1);

        } else {
            clearInterval(this.interval);
        }
    };

    handleReset = () => {
        this.setState({
            min: 0,
            sec: 0,
            msec: 0,

            start: false
        });

        clearInterval(this.interval);

        this.lapArr = [];
    };

    static navigationOptions = {
        headerTitle: 'Stopwatch',
        headerStyle: {

            backgroundColor: Colors.primaryColor
        },
        headerTintColor: 'white'
    };

    padToTwo = (number) => (number <= 9 ? `0${number}` : number);


    render() {

        return (

            <View style={styles.screen}>
                {/* <Stopwatch laps msecs
                    start={this.state.isStopwatchStart}
                    //To start
                    reset={this.state.resetStopwatch}
                    //To reset
                    styles={styles.stopwatchStyle}
                //options for the styling
                getTime={this.getFormattedTime} 

                />
                <TouchableOpacity style={styles.btnStyle} onPress={this.startStopStopWatch}>
                    <Text style={styles.textStyle}>
                        {!this.state.isStopwatchStart ? "START" : "STOP"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnStyle} onPress={this.resetStopwatch}>
                    <Text style={styles.textStyle} >RESET</Text>
                </TouchableOpacity> */}




                <View style={styles.parent}>
                    <Text style={styles.child}>{this.padToTwo(this.state.min) + ' : '}</Text>
                    <Text style={styles.child}>{this.padToTwo(this.state.sec) + ' : '}</Text>
                    <Text style={styles.child}>{this.padToTwo(this.state.msec)}</Text>
                </View>


                <View style={styles.buttonParent}>
                    <TouchableOpacity style={styles.button} onPress={this.handleReset}><Text style={styles.buttonText}>Reset</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.handleToggle}><Text style={styles.buttonText}>{!this.state.start ? 'Start' : 'Stop'}</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.handleLap(this.state.min, this.state.sec, this.state.msec)} disabled={!this.state.start}><Text style={styles.buttonText}>Lap</Text></TouchableOpacity>
                </View>

                <StopwatchLapList lap={this.lapArr} />

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
        borderWidth: 2,
        borderColor: '#FFFFFF',
        height: 48,
        width: 96,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 8,
        marginBottom: 8
    },
    textStyle: {
        color: "white"
    },
    stopwatchStyle: {

        backgroundColor: Colors.primaryColor,

    }

    ,
    parent: {
        display: "flex",
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#FFFFFF",
        backgroundColor: '#FFFFFF',
        paddingLeft: "8%",
        paddingRight: "8%",
        paddingTop: ".5%",
        paddingBottom: ".5%",
    },
    child: {
        fontSize: 40,
        color: "#000000",
    },
    buttonParent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: "12%",
    },

    button: {
        backgroundColor: "#FFFFFF",
        paddingTop: "5%",
        paddingBottom: "5%",
        paddingLeft: "5%",
        paddingRight: "5%",
        display: "flex",
        margin:8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#FFFFFF",
        height: 60,
        width:90
    },

    buttonText: {
        color: "#000000",
        fontSize: 18,
        alignSelf: "center"
    }
});
