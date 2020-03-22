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


export default class TableOperation extends React.Component {

    constructor(props) {
        super(props);

        global.sumCounter = 0;
        this.params = this.props.navigation.state.params;
        this.state = {
            timer: 0,
            tableAns: 0,
            restartFlag: false,
            btnStatus: false


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
        this.disableTask();



    }

    generateTable() {

        if (this.params.NumOfSum != sumCounter) {

            sumCounter++

            this.setState({ tableAns: this.params.MulTable * sumCounter })

        } else {
            this.refs.toast.show('Number of steps is completed', DURATION.LENGTH_LONG);

        }
    }

    disableTask() {

        setTimeout(() => {

            this.setState({ restartFlag: true });

        }, this.params.TimeInSeconds * 1000);

        setTimeout(() => {

            this.setState({ btnStatus: true });

        }, this.params.TimeInSeconds * 1000);



    }


    restart() {

        sumCounter = 0;


        this.setState({ restartFlag: false })


        this.setState({ btnStatus: false })

        this.startTimer();

        this.generateTable();

        this.disableTask();

    }

    static navigationOptions = {
        headerTitle: 'Table',
        headerStyle: {

            backgroundColor: Colors.primaryColor
        },
        headerTintColor: 'white'
    };

    render() {

        // console.log(" time" + this.params.TimeToFinish);


        return (
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss();
            }}>
                <View style={styles.screen}>

                    <Text style={styles.textStyle}>{this.state.timer + '/' + this.params.TimeInSeconds}</Text>



                    <Text style={styles.textStyle}>{this.params.MulTable + " X " + sumCounter + "=" + this.state.tableAns}</Text>


                    <TouchableOpacity
                        disabled={this.state.btnStatus}

                        style={styles.startBtn} onPress={() => { this.generateTable() }}>
                        <Text style={styles.startText}>Next</Text>
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


