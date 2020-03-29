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
        this.operations2 = ['CBRT', 'SQRT', 'X2', 'X3', '%']


    }
    static navigationOptions = {
        headerTitle: 'Calculator',
        headerStyle: {

            backgroundColor: Colors.primaryColor
        },
        headerTintColor: 'white'
    };
    calculateResult() {
        const text = this.state.resultText
        // console.log(text, eval(text));
        this.setState({

            calculationText: this.evaluate(text)
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
            return this.validate() && this.calculateResult()
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
                // console.log(operations);

                if (this.state.text == "") return
                // console.log(operations);

                this.setState({
                    resultText: this.state.resultText + operations
                })

        }

    }

    doCaculation(operations) {
        switch (operations) {
            case 'CBRT':

                let cbrt = Math.cbrt(this.state.calculationText);

                this.setState({

                    calculationText: cbrt
                })
                break
            case 'SQRT':
                let sqrt = Math.sqrt(this.state.calculationText);
                this.setState({

                    calculationText: sqrt
                })
                break
            case 'X2':
                let x2 = Math.pow(this.state.calculationText, 2)

                this.setState({

                    calculationText: x2
                })
                break
            case 'X3':
                let x3 = Math.pow(this.state.calculationText, 3)

                this.setState({

                    calculationText: x3
                })
                break
            case '%':


                const lastChar = this.state.resultText.split('').pop()

                if (this.operations.indexOf(lastChar) > 0) return
                // console.log(operations);

                if (this.state.text == "") return
                // console.log(operations);

                this.setState({
                    resultText: this.state.resultText + operations
                })
                break


        }



    }

    evaluate(str) {
        function splitStringArithmetic(str) {
            var index = 0;
            var splitArray = str.split("").reduce((arr, v, i) => {
                if (isNaN(parseInt(v))) {
                    arr.push(str.slice(index, i));
                    arr.push(v);
                    index = i + 1;
                }
                return arr;
            }, []);
            splitArray.push(str.slice(index));
            return splitArray;
        }

        function findMultIndex(arr) {
            return arr.findIndex(i => i == "*");
        }

        function findDivIndex(arr) {
            return arr.findIndex(i => i == "/");
        }

        function findAddIndex(arr) {
            return arr.findIndex(i => i == "+");
        }

        function findSubIndex(arr) {
            return arr.findIndex(i => i == "-");
        }
        function findPercentageIndex(arr) {
            return arr.findIndex(i => i == "%");
        }

        function multiply(arr) {
            var index = findMultIndex(arr);
            arr[index] = parseInt(arr[index - 1]) * parseInt(arr[index + 1]);
            return arr.filter((c, i) => {
                return i !== index - 1 && i !== index + 1;
            });
        }

        function divide(arr) {
            var index = findDivIndex(arr);
            arr[index] = parseInt(arr[index - 1]) / parseInt(arr[index + 1]);
            return arr.filter((c, i) => {
                return i !== index - 1 && i !== index + 1;
            });
        }

        function add(arr) {
            var index = findAddIndex(arr);
            arr[index] = parseInt(arr[index - 1]) + parseInt(arr[index + 1]);
            return arr.filter((c, i) => {
                return i !== index - 1 && i !== index + 1;
            });
        }

        function subtract(arr) {
            var index = findSubIndex(arr);
            arr[index] = parseInt(arr[index - 1]) - parseInt(arr[index + 1]);
            return arr.filter((c, i) => {
                return i !== index - 1 && i !== index + 1;
            });
        }

        function percentage(arr) {
            var index = findPercentageIndex(arr);
            arr[index] = parseInt(arr[index - 1]) * parseInt(arr[index + 1]) / 100;
            return arr.filter((c, i) => {
                return i !== index - 1 && i !== index + 1;
            });
        }

        function containsMultOrDiv(arr) {
            return arr.some(i => i === "*" || i === "/");
        }

        function containsAddOrSub(arr) {
            return arr.some(i => i === "+" || i === "-");
        }
        function containsPercentage(arr) {
            return arr.some(i => i === "%");
        }

        function simplify(arr) {
            while (containsMultOrDiv(arr)) {
                if (arr.includes("*")) {
                    if (arr.includes("/")) {
                        if (arr.includes("%")) {
                            arr = percentage(arr);


                        } else if (findDivIndex(arr) < findMultIndex(arr)) {
                            arr = divide(arr);
                        } else {
                            arr = multiply(arr);
                        }
                    } else {
                        arr = multiply(arr);
                    }
                } else {
                    arr = divide(arr);
                }
            }
            while (containsAddOrSub(arr)) {
                if (arr.includes("+")) {
                    if (arr.includes("-")) {
                        if (arr.includes("%")) {
                            arr = percentage(arr);

                        } else if (findSubIndex(arr) < findAddIndex(arr)) {
                            arr = subtract(arr);
                        } else {
                            arr = add(arr);
                        }
                    } else {
                        arr = add(arr);
                    }
                } else {
                    arr = subtract(arr);
                }
            }

            while (containsPercentage(arr)) {
                if (arr.includes("%")) {
                    arr = percentage(arr);
                }
            }
            return arr;
        }

        var arithmeticArray = splitStringArithmetic(str);

        return simplify(arithmeticArray);
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


        let ops2 = []

        for (let i = 0; i < 5; i++) {
            ops2.push(<TouchableOpacity onPress={() => this.doCaculation(this.operations2[i])}
                style={styles.btn}><Text style={styles.btnText2}>
                    {this.operations2[i]}</Text></TouchableOpacity>)
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
                    <View style={styles.operations}>
                        {ops2}
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
        color: 'white',
        paddingRight:10
    },
    btn: {

        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    btnText: {

        fontSize: 25,
        color: 'white'
    },
    btnText2: {

        fontSize: 20,
        color: 'white'
    },
    resultText: {

        fontSize: 25,
        color: 'white',
        paddingRight:10

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
        flex: 5,
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
