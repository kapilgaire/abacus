import React, { useState, Component } from 'react';
import {
    View,
    Text,
    Button,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import Colors from '../constants/Colors'
import { render } from 'react-dom';


// const getRandomNum = (max, min) => {
//     return Math.floor(Math.random() * (+max - +min) + +min);
// };

// const AddOperation = props => {

// const [randomNumber, setRandomNumber] = useState(0);

export default class AddOperation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            NumberHolder: 0
        };
    }

    // generateRandomNumber
    //     = () => {

    //         const max = 10;
    //         const min = 99;
    //         let random =
    //             this.setState({ NumberHolder: random });
    //     }

    showRandomNumber() {

        const max = 10;
        const min = 99;
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                // this.generateRandomNumber
                // console.log('rand');
                this.setState({ NumberHolder: Math.floor(Math.random() * (+max - +min) + +min) });

            }, i * 1000);

        }
    }

    componentDidMount() {
        console.log("componentDidMount()");

        this.showRandomNumber();
    }


    static navigationOptions = {
        headerTitle: 'Addition',
        headerStyle: {

            backgroundColor: Colors.primaryColor
        },
        headerTintColor: 'white'
        /* No more header config here! */
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
                        />
                    </View>



                    <TouchableOpacity style={styles.startBtn}
                        // onPress={() => {

                        //     setRandomNumber(getRandomNum(1, 9))
                        // }}


                        onPress={this.generateRandomNumber}

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

// AddOperation.navigationOptions = navigationData => {

//     return {
//         headerTitle: 'Addition',
//         headerStyle: {

//             backgroundColor: Colors.primaryColor
//         },
//         headerTintColor: 'white'
//     };

// };

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',

        margin: 8

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
        color: "black",
        fontSize: 36,
        alignContent: "center",
        textAlign: "center",
        marginBottom: 8


    },
    startText: {
        color: "white"
    }
});


