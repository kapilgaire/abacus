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

export default class DecimalAddParam extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      numOfDigigt: 0,
      numOfSum: 0,
      timeInSeconds: 0
    };
  }

  static navigationOptions = {
    headerTitle: 'Decimal Add sub',
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
          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              placeholder="Number of digit"
              placeholderTextColor="#003f5c"
              keyboardType="number-pad"
              maxLength={6}
              onChangeText={numOfDigigt => this.setState({ numOfDigigt })}
              value={this.state.numOfDigigt}
            />
          </View>
          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              placeholder="Number of Sum"
              placeholderTextColor="#003f5c"
              keyboardType="number-pad"
              maxLength={6}
              onChangeText={numOfSum => this.setState({ numOfSum })}
              value={this.state.numOfSum}
            />
          </View>

          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              placeholder="Time in Seconds"
              placeholderTextColor="#003f5c"
              keyboardType="number-pad"
              maxLength={6}
              onChangeText={timeInSeconds => this.setState({ timeInSeconds })}
              value={this.state.timeInSeconds}
            />
          </View>

          <TouchableOpacity style={styles.startBtn} onPress={() => {

            this.props.navigation.navigate({
              routeName: 'AddOperation',
              params: {
                NumOfDigit: this.state.numOfDigigt,
                NumOfSum: this.state.numOfSum,
                TimeInSeconds: this.state.timeInSeconds

              }

            });
          }}>
            <Text style={styles.startText}>START</Text>
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

  startText: {
    color: "white"
  }
});

