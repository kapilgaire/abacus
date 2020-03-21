import React, {  Component } from 'react';
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


export default class DecimalAddSubOperation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            NumberHolder: 0,
            answer: 0,
            userAns: 0
        };
    }

    generateRandomNumber
        = () => {

            const max = 1;
            const min = 9;
            let random = Math.floor(Math.random() * (+max - +min) + +min);
            return random;

        }

    showRandomNumber() {

        let num = [];
        num.length = 5;
        for (let i = 0; i < 5; i++) {
            num[i] = this.generateRandomNumber();
            setTimeout(() => {

                this.setState({ NumberHolder: num[i] });

            }, i * 1000);

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
        console.log("ans " + this.state.answer);
        console.log("user ans" + this.state.userAns);



        if (this.state.answer == this.state.userAns) {
            console.log(true);
            ToastAndroid.show('True', ToastAndroid.LONG);

        } else {
            console.log(false);
            ToastAndroid.show('False', ToastAndroid.LONG);

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
                    <Text style={styles.randumNum}>{this.state.answer}</Text>


                    <TouchableOpacity onPress={() => { this.restart() }} style={styles.startBtn}>
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

    randumNum: {
        color: "white",
        fontSize: 36,
        alignContent: "center",
        textAlign: "center",
        marginBottom: 8


    },
    startText: {
        color: "white"
    }
});


