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


export default class MixAddSubOperation extends React.Component {

    constructor(props) {
        super(props);
        this.params = this.props.navigation.state.params;
        this.state = {
            NumberHolder: 0,
            answer: 0,
            userAns: '',
            showAnswer: false,
            showContent: false,
            // animation: new Animated.Value(0)


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


            let max = 0;
            let min = 0;
            let random = 0;




            let from = this.params.EnterFromDigit
            let to = this.params.EnterToDigit

            let digit = Math.floor(Math.random() * (+to - +from) + +from);

            if (digit == 1) {
                min = 1;
                max = 9;
            } else if (digit == 2) {
                min = 10;
                max = 99;
            } else if (digit == 3) {
                min = 100;
                max = 999;
            } else if (digit == 4) {
                min = 1000;
                max = 9999;
            } else if (digit == 5) {
                min = 10000;
                max = 99999;
            } else if (digit == 6) {
                min = 100000;
                max = 999999;
            } else if (digit == 7) {
                min = 1000000;
                max = 9999999;
            } else if (digit == 8) {
                min = 10000000;
                max = 99999999;
            } else if (digit == 9) {
                min = 100000000;
                max = 999999999;
            }





            random = Math.floor(Math.random() * (+max - +min) + +min);

            return random;


        }

    showRandomNumber() {

        let num = [];

        num.length = this.params.NumOfSum;

        for (let i = 0; i < this.params.NumOfSum; i++) {


            num[i] = this.generateRandomNumber();
            

        }
        console.log('before'+num);

        for (let i = 0; i < this.params.NumOfSum; i++) {


            if(num[i-1] == num[i]) {
                var j = i;
                while(j < num.length && num[j] == num[i]) {
                    j++;
                }
                var el = num[j];
                num[j] = num[i];
                num[i] = el;  
            }

            setTimeout(() => {

                // this.startAnimation()
                this.setState({ NumberHolder: num[i] });

            }, i * this.params.TimeInSeconds * 1000);



        }

        console.log('after'+num);
        

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
            this.refs.toast.show('Empty', 2000);

        } else if (this.state.answer == this.state.userAns) {
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

    componentDidMount() {

        this.showRandomNumber();

        this.dispContent();
    }


    static navigationOptions = {
        headerTitle: 'Mix Add/Sub',
        headerStyle: {

            backgroundColor: Colors.primaryColor
        },
        headerTintColor: 'white'
    };
    render() {

        // const animatedStyle = {
        //     opacity: this.state.animation
        // }

        return (
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss();
            }}>
                <View style={styles.screen}>

                    {/* <Animated.View style={animatedStyle} > */}
                        <Text style={styles.randumNum}>{this.state.NumberHolder}</Text>
                    {/* </Animated.View> */}

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
                        this.state.showContent ? <TouchableOpacity onPress={() => { this.restart() }}
                            style={styles.startBtn}  >
                            <Text style={styles.startText}>START AGAIN</Text>
                        </TouchableOpacity> : null
                    }



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
        borderWidth: 3,
        borderColor: Colors.whiteColor,

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


