import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,

} from 'react-native';

import Colors from '../constants/Colors';
import Toast, { DURATION } from 'react-native-easy-toast';

export default class CubeRootParam extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numOfDigigt: '',
      numOfSum: '',
      timeInSeconds: ''
    };
  }


  static navigationOptions = {
    headerTitle: 'Cube Root',
    headerStyle: {

      backgroundColor: Colors.primaryColor
    },
    headerTintColor: 'white'
  };

  GoToNextScreen() {
    if (this.state.numOfDigigt == '') {

      this.refs.toast.show('Enter Lenght of Root',DURATION.LENGTH_LONG);
    } else if (this.state.numOfSum == '') {
      this.refs.toast.show('Enter Number of Sum',DURATION.LENGTH_LONG);

    } else if (this.state.timeInSeconds == '') {
      this.refs.toast.show('Enter Time ',DURATION.LENGTH_LONG);

    } else {
      this.props.navigation.navigate({
        routeName: 'CubeRootOperation',
        params: {
          NumOfDigit: this.state.numOfDigigt,
          NumOfSum: this.state.numOfSum,
          TimeInSeconds: this.state.timeInSeconds

        }

      });
    }
  }

  render() {

    return (
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
      }}>
        <View style={styles.screen}>
          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              placeholder="Length of Cube root"
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


            this.GoToNextScreen();
          }}>
            <Text style={styles.startText}>START</Text>
          </TouchableOpacity>

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

