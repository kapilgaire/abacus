import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    ToastAndroid
} from 'react-native';
import Colors from '../constants/Colors'
import Toast, { DURATION } from 'react-native-easy-toast';


export default class CubeRootOperation extends React.Component {

    constructor(props) {
        super(props);
        global.wrongCounter = 0;
        global.righCounter = 0;
        global._numOfSum = 0;
        this.params = this.props.navigation.state.params;
        this.state = {
            timer: 0,
            right: 0,
            wrong: 0,
            square: 0,
            userAns: 0,
            prevQues: ''

        };
    }

    startTimer() {
        for (let i = 0; i <= this.params.TimeInSeconds; i++) {
            setTimeout(() => {

                this.setState({ timer: i });

            }, i * 1000);
        }
    }

    generateRandomNo() {

        let max = 0;
        let min = 0;
        let random = 0;


        if (_numOfSum != this.params.NumOfSum) {
            _numOfSum++;
            if (this.params.NumOfDigit == 1) {
                min = 1;
                max = 9;
            } else if (this.params.NumOfDigit == 2) {
                min = 10;
                max = 99;
            } else if (this.params.NumOfDigit == 3) {
                min = 100;
                max = 999;
            } else if (this.params.NumOfDigit == 4) {
                min = 1000;
                max = 9999;
            } else if (this.params.NumOfDigit == 5) {
                min = 10000;
                max = 99999;
            } else if (this.params.NumOfDigit == 6) {
                min = 100000;
                max = 999999;
            } else if (this.params.NumOfDigit == 7) {
                min = 1000000;
                max = 9999999;
            } else if (this.params.NumOfDigit == 8) {
                min = 10000000;
                max = 99999999;
            } else if (this.params.NumOfDigit == 9) {
                min = 100000000;
                max = 999999999;
            }
        } else {
            this.refs.toast.show('Number of step is complted', DURATION.LENGTH_LONG);


        }
        random = Math.floor(Math.random() * (+max - +min) + +min);

        let sqr = Math.pow(random, 3);

        this.setState({ square: sqr });

        return random;



    }

    componentDidMount() {

        this.startTimer();

        this.generateRandomNo();

    }

    checkAnswer() {


        let ans = Math.cbrt(this.state.square) ;


        this.setState({ prevQues: "\u221A "+this.state.square + " = " + ans })

        if (ans == this.state.userAns) {
            righCounter++;
            this.setState({ right: righCounter });
        } else {
            wrongCounter++;
            this.setState({ wrong: wrongCounter });
        }



        this.generateRandomNo();
    }


    static navigationOptions = {
        headerTitle: 'Square Root',
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

                    <Text style={styles.textStyle}>{'Right :' + this.state.right}</Text>

                    <Text style={styles.textStyle}>{'Wrong :' + this.state.wrong}</Text>

                    <Text style={styles.textStyle}>{this.state.prevQues}</Text>

                    <Text style={styles.textStyle}>{'\u221A' + this.state.square}</Text>



                    <View style={styles.inputView} >
                        <TextInput
                            style={styles.inputText}
                            placeholder="Enter Your answer"
                            placeholderTextColor="#003f5c"
                            keyboardType="number-pad"
                            maxLength={9}
                            onChangeText={(userAns) => this.setState({ userAns })}
                            value={this.setState.userAns}
                        />
                    </View>



                    <TouchableOpacity style={styles.startBtn}

                        onPress={() => {
                            this.checkAnswer()

                        }}
                    >
                        <Text style={styles.startText}

                        >CHECK ANS</Text>
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


