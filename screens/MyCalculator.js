import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Colors from '../constants/Colors'

export default class MyStopwatch extends React.Component {

    constructor() {
        super()
        this.state = {
            resultText: "",
            calculationText: ""
        }
        this.operations = ['C', '+', '-', '*', '/']

    }

    calculateResult() {
        const text = this.state.resultText
        console.log(text, eval(text));
        this.setState({

            calculationText: eval(text)
        })

    }

    validate() {
        const text = this.state.resultText
        switch (text.slice(-1)) {
            case '+':
            case '-':
            case '*':
            case '/':
                return false
        }
        return true
    }

    buttonPressed(text) {
        // console.log(text);

        if (text == '=') {
            return  this.validate() && this.calculateResult()
        }
        this.setState({
            resultText: this.state.resultText + text
        })

    }

    operate(operations) {
        switch (operations) {
            case 'C':
                let text = this.state.resultText.split('')
                text.pop()
                this.setState({
                    resultText: text.join('')
                })
                break
            case '+':
            case '-':
            case '*':
            case '/':


                const lastChar = this.state.resultText.split('').pop()

                if (this.operations.indexOf(lastChar) > 0) return

                if (this.state.text == "") return
                this.setState({
                    resultText: this.state.resultText + operations
                })

        }

    }

    render() {

        let rows = []

        let num = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']]
        for (let i = 0; i < 4; i++) {
            let row = []
            for (let j = 0; j < 3; j++) {
                row.push(<TouchableOpacity onPress={() => this.buttonPressed(num[i][j])}
                    style={styles.btn}><Text style={styles.btnText}>
                        {num[i][j]}</Text></TouchableOpacity>)
            }
            rows.push(<View style={styles.row}>{row}</View>)
        }

        let ops = []

        for (let i = 0; i < 5; i++) {
            ops.push(<TouchableOpacity onPress={() => this.operate(this.operations[i])}
                style={styles.btn}><Text style={styles.btnText}>
                    {this.operations[i]}</Text></TouchableOpacity>)
        }


        return (
            <View style={styles.container}>
                <View style={styles.result}>
                    <Text style={styles.resultText}>{this.state.resultText}</Text>
                </View>
                <View style={styles.calculation}>
                    <Text style={styles.calculationText}>{this.state.calculationText}</Text>
                </View>
                <View style={styles.buttons}>
                    <View style={styles.numbers}>
                        {rows}
                    </View>
                    <View style={styles.operations}>
                        {ops}
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    result: {
        flex: 2,
        backgroundColor: Colors.bgColor,
        justifyContent: 'center',
        alignItems: 'flex-end'

    },
    white: {
        color: 'white'
    },
    calculationText: {
        fontSize: 30,
        color: 'white'
    },
    btn: {

        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    btnText: {

        fontSize: 30,
        color: 'white'
    },
    resultText: {

        fontSize: 25,
        color: 'white'

    },
    row: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    calculation: {
        flex: 1,
        backgroundColor: Colors.bgColor,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    buttons: {
        flex: 7,
        flexDirection: 'row'
    },
    numbers: {
        flex: 3,
        backgroundColor: Colors.bgColor
    },
    operations: {
        flex: 1,
        backgroundColor: Colors.bgColor,
        justifyContent: 'space-around'
    }
});
