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


export default class PercentageOperation extends React.Component {

    constructor(props) {
        super(props);
        global.wrongCounter = 0;
        global.righCounter = 0;
        this.params = this.props.navigation.state.params;
        this.state = {
            timer: 0,
            right: 0,
            wrong: 0,
            firstNo: 0,
            secondNo: 0,
            userAns: 0,
            prevQues: ''

        };
    }

    startTimer() {
        for (let i = 0; i <= this.params.TimeToFinish; i++) {
            setTimeout(() => {

                this.setState({ timer: i });

            }, i * 1000);
        }
    }

    generateRandomNo() {

        let max1 = this.params.HighNoToPer;
        let min1 = this.params.LowNoToPer;

        let max2 = this.params.HighNoPerBy;
        let min2 = this.params.LowNoPerBy;

        let firstRandom = Math.floor(Math.random() * (+max1 - +min1) + +min1);

        let secondRandom = Math.floor(Math.random() * (+max2 - +min2) + +min2);

        this.setState({ firstNo: firstRandom });

        this.setState({ secondNo: secondRandom });



    }

    componentDidMount() {

        this.startTimer();

        this.generateRandomNo();

    }

    checkAnswer() {


        let ans = this.state.firstNo/100 * this.state.secondNo;

        this.setState({ prevQues: this.state.firstNo + " % " + this.state.secondNo + " = " + ans })

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
        headerTitle: 'Percentage',
        headerStyle: {

            backgroundColor: Colors.primaryColor
        },
        headerTintColor: 'white'
    };

    render() {



        return (
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss();
            }}>
                <View style={styles.screen}>

                    <Text style={styles.textStyle}>{this.state.timer + '/' + this.params.TimeToFinish}</Text>

                    <Text style={styles.textStyle}>{'Right :' + this.state.right}</Text>

                    <Text style={styles.textStyle}>{'Wrong :' + this.state.wrong}</Text>

                    <Text style={styles.textStyle}>{this.state.prevQues}</Text>

                    <Text style={styles.textStyle}>{this.state.firstNo + ' % ' + this.state.secondNo}</Text>



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

        backgroundColor: Colors.primaryColor,
        borderRadius: 5,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
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


