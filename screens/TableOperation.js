import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import Colors from '../constants/Colors'
import Toast, { DURATION } from 'react-native-easy-toast';


export default class SquareRootOperation extends React.Component {

    constructor(props) {
        super(props);

        global._numOfSum = 0;
        this.params = this.props.navigation.state.params;
        this.state = {
            timer: 0,
            tableAns: 0


        };
    }

    startTimer() {
        for (let i = 0; i <= this.params.TimeInSeconds; i++) {
            setTimeout(() => {

                this.setState({ timer: i });

            }, i * 1000);
        }
    }

    componentDidMount() {

        this.startTimer();
        this.generateTable();


    }

    generateTable() {

        if (_numOfSum != this.params.NumOfSum) {
            _numOfSum++;

            this.setState({ tableAns: this.params.MulTable * _numOfSum })
        } else {
            this.refs.toast.show('Number of step is complted', DURATION.LENGTH_LONG);

        }

    }




    static navigationOptions = {
        headerTitle: 'Table',
        headerStyle: {

            backgroundColor: Colors.primaryColor
        },
        headerTintColor: 'white'
    };

    render() {

        console.log(" time" + this.params.TimeToFinish);


        return (
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss();
            }}>
                <View style={styles.screen}>

                    <Text style={styles.textStyle}>{this.state.timer + '/' + this.params.TimeInSeconds}</Text>



                    <Text style={styles.textStyle}>{this.params.MulTable + " X " + _numOfSum + "=" + this.state.tableAns}</Text>


                    <TouchableOpacity style={styles.startBtn} onPress={() => { this.generateTable() }}>
                        <Text style={styles.startText}>Next</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.startBtn}>
                        <Text style={styles.startText}>START AGAIN</Text>
                    </TouchableOpacity>
                    <Toast ref="toast" />

                </View>
            </TouchableWithoutFeedback>
        );
    }

}



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: Colors.bgColor,
        padding: 8

    },
    inputView: {
        backgroundColor: "#FAFAFA",
        justifyContent: "center",
        padding: 8,
        borderRadius: 5,
        marginBottom: 5

    },

    startBtn: {

        backgroundColor: Colors.bgColor,
        borderRadius: 5,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 8,
        marginBottom: 8
    },



    textStyle: {
        color: "white",
        fontSize: 28,
        alignContent: "center",
        textAlign: "center",
        marginBottom: 8


    },
    startText: {
        color: "white"
    }
});


