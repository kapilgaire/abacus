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



export default class PercentageOperation extends React.Component {

    constructor(props) {
        super(props);
        global.wrongCounter = 0;
        global.righCounter = 0;
        global.sumCounter = 0;

        this.params = this.props.navigation.state.params;
        this.state = {
            timer: 0,
            right: 0,
            wrong: 0,
            firstNo: 0,
            secondNo: 0,
            userAns: 0,
            prevQues: '',
            textInputStatus: true,
            restartFlag: false,
            btnStatus: false

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

    disableTask() {
        setTimeout(() => {

            this.setState({ textInputStatus: false });

        }, this.params.TimeToFinish * 1000);

        setTimeout(() => {

            this.setState({ restartFlag: true });

        }, this.params.TimeToFinish * 1000);

        setTimeout(() => {

            this.setState({ btnStatus: true });

        }, this.params.TimeToFinish * 1000);



    }
    componentDidMount() {

        this.startTimer();

        this.generateRandomNo();
        this.disableTask();


    }

    checkAnswer() {
        if (this.params.NumOfSum != sumCounter) {

            sumCounter++


            let ans = this.state.firstNo / 100 * this.state.secondNo;

            this.setState({ prevQues: this.state.firstNo + " % " + this.state.secondNo + " = " + ans })

            if (ans == this.state.userAns) {
                righCounter++;
                this.setState({ right: righCounter });
            } else {
                wrongCounter++;
                this.setState({ wrong: wrongCounter });
            }



            this.generateRandomNo();

            this.generateRandomNo();
        } else {
            this.refs.toast.show('Number of steps is completed', DURATION.LENGTH_LONG);

            this.disable()
        }
    }

    disable(){
        this.setState({ textInputStatus: false });
        this.setState({ restartFlag: true });


    }
    restart() {
        wrongCounter = 0;
        righCounter = 0;
        sumCounter = 0;

        this.setState({ wrong: 0 });
        this.setState({ right: 0 });

        this.setState({ prevQues: "" })


        this.setState({ textInputStatus: true })



        this.setState({ restartFlag: false })


        this.setState({ btnStatus: false })

        this.startTimer();

        this.generateRandomNo();

        this.disableTask();

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
                            editable={this.state.textInputStatus}

                            onChangeText={(userAns) => this.setState({ userAns })}
                            value={this.setState.userAns}
                        />
                    </View>



                    <TouchableOpacity style={styles.startBtn}

                        onPress={() => {
                            this.checkAnswer()

                        }}
                        disabled={this.state.btnStatus}

                    >
                        <Text style={styles.startText}

                        >CHECK ANS</Text>
                    </TouchableOpacity>

                    {
                        this.state.restartFlag ? <TouchableOpacity onPress={() => this.restart()}
                            style={styles.startBtn}>
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


