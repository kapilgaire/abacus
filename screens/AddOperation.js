import React from 'react';
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

const AddOperation = props => {

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>

                <Text style={styles.randumNum}>0</Text>

                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="Enter Your answer"
                        placeholderTextColor="#003f5c"
                        keyboardType="number-pad"
                        maxLength={9}
                    />
                </View>



                <TouchableOpacity style={styles.startBtn}>
                    <Text style={styles.startText}>CHECK ANS</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.startBtn}>
                    <Text style={styles.startText}>START AGAIN</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
};

AddOperation.navigationOptions = navigationData => {

    return {
        headerTitle: 'Addition',
        headerStyle: {

            backgroundColor: Colors.primaryColor
        },
        headerTintColor: 'white'
    };

};

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

export default AddOperation;