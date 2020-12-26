import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    // Animated
} from 'react-native';
import Colors from '../constants/Colors'
import Toast, { DURATION } from 'react-native-easy-toast';



export default class DecimalAddOperation extends React.Component {

    constructor(props) {
        super(props);
        this.params = this.props.navigation.state.params;
        this.state = {
            NumberHolder: 0,
            answer: 0,
            userAns: '',
            showAnswer: false,
            showContent: false,
            genratedNumbers: [],

            // animation: new Animated.Value(0)


        };
    }

    // startAnimation = () => {

    //     Animated.timing(this.state.animation, {
    //         toValue: 0,
    //         timing: 10
    //     }).start(() => {
    //         Animated.timing(this.state.animation, {
    //             toValue: 1,
    //             duration: 10
    //         }).start();
    //     })
    // }
    dispAnswer() {

        if (this.state.showAnswer == false) {
            this.setState({ showAnswer: true })
        }
    }
    dispContent() {



        setTimeout(() => {

            this.setState({ showContent: true });
            this.setState({ NumberHolder: '' });


        }, this.params.NumOfSum * this.params.TimeInSeconds * 1000 + 1000);
    }

    generateRandomNumber
        = () => {
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

            // random = Math.floor(Math.random() * (+max - +min) + +min) / 10;

            random = (Math.random() * (+max - +min) + +min).toFixed(2);

            return random;

        }

    showRandomNumber() {

        let num = [];

        num.length = this.params.NumOfSum;
        for (let i = 0; i <num.length ; i++) {

                num[i] = this.generateRandomNumber();
          
        }

        num.sort((a, b) => b - a)

        console.log('numbers ' + num)

        for (let i = 0; i <num.length  ; i++) {



            // console.log(num[i])
            if ((i+1) % 3 == 0  ) {
                num[i] = num[i] * (-1)
            }


        }

        console.log('before'+num);


        this.setState({ genratedNumbers: num })

        for (let i = 0; i < num.length; i++) {


            setTimeout(() => {

                this.setState({ NumberHolder: num[i] });

            }, i * this.params.TimeInSeconds * 1000);



        }



    }

    doSum = () => {

        var sum = 0;
        for (let i = 0; i < this.state.genratedNumbers.length ; i++) {

            sum = sum + parseFloat(this.state.genratedNumbers[i]);
            // console.log(sum+' number '+i+' ' + this.state.genratedNumbers[i])

        }

        if (sum < 0) {
            sum = -sum
        }
        // var rounded = sum 

        return sum.toFixed(2)


    }

    checkAnswer() {

        // this.setState({ NumberHolder: '' });


        let ans = this.doSum();

        this.setState({ answer: ans });


        this.dispAnswer();


        if (this.state.userAns == '') {
            this.refs.toast.show('Empty', 2000);

        } else if (ans == this.state.userAns) {
            this.refs.toast.show('Right', 2000);


        } else {

            this.refs.toast.show('Wrong', 2000);

        }
    }
    restart() {
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
        headerTitle: 'Decimal Add/Sub',
        headerStyle: {

            backgroundColor: Colors.primaryColor
        },
        headerTintColor: 'white'
    };

    render() {

        const animatedStyle = {
            opacity: this.state.animation
        }
        return (
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss();
            }}>
                <View style={styles.screen}>

                    {/* <Animated.View style={animatedStyle} > */}
                    <Text style={styles.randumNum}>{this.state.NumberHolder == 0 ? '' : this.state.NumberHolder}</Text>
                    {/* </Animated.View> */}

                    {this.state.showContent ?
                        <View style={styles.inputView} >
                            <TextInput
                                style={styles.inputText}
                                placeholder="Enter Your answer"
                                placeholderTextColor="#003f5c"
                                keyboardType="number-pad"
                                onChangeText={(userAns) => this.setState({ userAns })}
                                value={this.setState.userAns}
                            />
                        </View> : null}



                    {this.state.showContent ? <TouchableOpacity style={styles.startBtn} onPress={() => { this.checkAnswer() }}>
                        <Text style={styles.startText}>CHECK ANS</Text>
                    </TouchableOpacity> : null}

                    {this.state.showAnswer ? <Text style={styles.randumNum}>{this.state.answer}</Text> : null}


                    {this.state.showContent ? <TouchableOpacity onPress={() => { this.restart() }} style={styles.startBtn}>
                        <Text style={styles.startText}>START AGAIN</Text>
                    </TouchableOpacity> : null}


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
        borderColor: Colors.whiteColor,
        borderWidth: 3,

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


