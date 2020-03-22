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


export default class AddOperation extends React.Component {

    constructor(props) {
        super(props);
        this.params = this.props.navigation.state.params;
        this.state = {
            NumberHolder: 0,
            answer: 0,
            userAns: '',
            showAnswer: false,
            showContent: false

        };
    }

    dispAnswer() {

        if (this.state.showAnswer == false) {
            this.setState({ showAnswer: true })
        }
    }

    dispContent() {

       

        setTimeout(() => {

            this.setState({ showContent: true });

        }, this.params.NumOfSum * this.params.TimeInSeconds * 1000);
    }
    generateRandomNumber
        = () => {
            // console.log("num of digit" + this.params.NumOfDigit + " num of sum "
            //     + this.params.NumOfSum + " Time in sec" + this.params.TimeInSeconds);



            let max = 0;
            let min = 0;
            let random = 0;


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

            random = Math.floor(Math.random() * (+max - +min) + +min);

            return random;


        }

    showRandomNumber() {

        let num = [];

        num.length = this.params.NumOfSum;
        for (let i = 0; i <this.params.NumOfSum; i++) {
            num[i] = this.generateRandomNumber();
            setTimeout(() => {

                this.setState({ NumberHolder: num[i] });

            }, i * this.params.TimeInSeconds * 1000);



        }

        this.doSum(num)
    }

    doSum = (num) => {

        let sum = 0;
        for (let i = 0; i < num.length; i++) {

            sum = sum + num[i];
        }

        this.setState({ answer: sum });

        return sum;
    }

    checkAnswer() {
        //console.log("ans " + this.state.answer);
        //console.log("user ans" + this.state.userAns);

        this.dispAnswer();


        if (this.state.userAns == '') {
            this.refs.toast.show('Empty', DURATION.LENGTH_LONG);

        } else if (this.state.answer == this.state.userAns) {
            this.refs.toast.show('True', DURATION.LENGTH_LONG);


        } else {

            this.refs.toast.show('False', DURATION.LENGTH_LONG);

        }
    }

    restart(){
        this.setState({ showContent: false });

        this.setState({ showAnswer: false })


        this.showRandomNumber();

        this.dispContent();


    }

    componentDidMount() {

        this.showRandomNumber();

        this.dispContent();
    }


    static navigationOptions = {
        headerTitle: 'Addition',
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

                    <Text style={styles.randumNum}>{this.state.NumberHolder}</Text>

                    {
                        this.state.showContent ? <View style={styles.inputView} >
                            <TextInput
                                style={styles.inputText}
                                placeholder="Enter Your answer"
                                placeholderTextColor="#003f5c"
                                keyboardType="number-pad"
                                onChangeText={(userAns) => this.setState({ userAns })}
                                value={this.setState.userAns}
                            />
                        </View> : null
                    }

                    {
                        this.state.showContent ? <TouchableOpacity style={styles.startBtn}

                            onPress={() => {
                                this.checkAnswer()

                            }}
                        >
                            <Text style={styles.startText}>CHECK ANS</Text>
                        </TouchableOpacity> : null
                    }

                    {
                        this.state.showAnswer ? <Text style={styles.randumNum}>{this.state.answer}</Text> : null
                    }

                    {
                        this.state.showContent ? <TouchableOpacity onPress={()=>{ this.restart()}} style={styles.startBtn}  >
                            <Text style={styles.startText}>START AGAIN</Text>
                        </TouchableOpacity> : null
                    }



                    <Toast ref="toast"
                                position='center'
                                />

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

    randumNum: {
        color: "white",
        fontSize: 72,
        alignContent: "center",
        textAlign: "center",
        marginBottom: 8


    },
    startText: {
        color: "white"
    }
});


