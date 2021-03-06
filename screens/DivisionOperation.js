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


export default class DivisionOperation extends React.Component {

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

        let max1 = this.params.HighNoToDiv;
        let min1 = this.params.LowNoToDiv;

        let max2 = this.params.HighNoDivBy;
        let min2 = this.params.LowNoDivBy;

        let firstRandom = Math.floor(Math.random() * (+max1 - +min1) + +min1);

        let secondRandom = Math.floor(Math.random() * (+max2 - +min2) + +min2);

        let thirdNum = firstRandom *secondRandom

        this.setState({ firstNo: thirdNum });

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


            let ans = this.state.firstNo / this.state.secondNo;

            this.setState({ prevQues: this.state.firstNo + " ÷ " + this.state.secondNo + "=" + ans })

            if (ans == this.state.userAns) {
                righCounter++;
                this.setState({ right: righCounter });
                this.setState({userAns:''})

            } else {
                wrongCounter++;
                this.setState({ wrong: wrongCounter });
                this.setState({userAns:''})

            }



            this.generateRandomNo();
        } else {
            this.refs.toast.show('Number of steps are completed', 2000);

            this.disable()
        }
    }

    disable(){
        this.setState({ textInputStatus: false });
        this.setState({ restartFlag: true });


    }


    static navigationOptions = {
        headerTitle: 'Division',
        headerStyle: {

            backgroundColor: Colors.primaryColor
        },
        headerTintColor: 'white'
    };

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

    render() {

        // console.log(" time" + this.params.TimeToFinish);


        return (
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss();
            }}>
                <View style={styles.screen}>

                    <Text style={styles.textStyle}>{this.state.timer + '/' + this.params.TimeToFinish}</Text>

                    <Text style={styles.textStyle}>{'Right :' + this.state.right}</Text>

                    <Text style={styles.textStyle}>{'Wrong :' + this.state.wrong}</Text>

                    <Text style={styles.textStyle}>{this.state.prevQues}</Text>

                    <Text style={styles.textStyle}>{this.state.firstNo + ' / ' + this.state.secondNo}</Text>



                    <View style={styles.inputView} >
                        <TextInput
                            placeholder="Enter Your answer"
                            placeholderTextColor="#003f5c"
                            keyboardType="number-pad"
                            editable={this.state.textInputStatus}

                            onChangeText={(userAns) => this.setState({ userAns })}
                            value={this.state.userAns}
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
        marginTop:10,

        borderRadius: 5,
        marginBottom: 5

    },

    startBtn: {

        backgroundColor: Colors.bgColor,
        borderRadius: 5,
        height: 50,
        borderWidth:3,
        borderColor:Colors.whiteColor,

        alignItems: "center",
        justifyContent: "center",
        marginTop: 6,
        marginBottom: 6
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


