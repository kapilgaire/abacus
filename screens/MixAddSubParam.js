import React from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,

} from 'react-native';

import Colors from '../constants/Colors';
import Toast, { DURATION } from 'react-native-easy-toast';

export default class MixAddSubParam extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      enterToDigit: '',
      enterFromDigit: '',
      numOfSum: '',
      timeInSeconds: ''
    };
  }


  static navigationOptions = {
    headerTitle: 'Mix Add/sub',
    headerStyle: {

      backgroundColor: Colors.primaryColor
    },
    headerTintColor: 'white'
  };

  GoToNextScreen() {
    if (this.state.enterToDigit == '') {

      this.refs.toast.show('Enter To Digit',DURATION.LENGTH_LONG);
    } else if (this.state.enterFromDigit == '') {
      this.refs.toast.show('Enter From Digit',DURATION.LENGTH_LONG);

    } else if (this.state.numOfSum == '') {
      this.refs.toast.show('Enter Number of Sum',DURATION.LENGTH_LONG);

    } else if (this.state.timeInSeconds == '') {
      this.refs.toast.show('Enter Time ',DURATION.LENGTH_LONG);

    } else {
      this.props.navigation.navigate({
        routeName: 'MixAddSubOperation',
        params: {
          EnterToDigit: this.state.enterToDigit,
          EnterFromDigit: this.state.enterFromDigit,
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
              placeholder="Enter from digit"
              placeholderTextColor="#003f5c"
              keyboardType="number-pad"
              maxLength={6}
              onChangeText={enterFromDigit => this.setState({ enterFromDigit })}
              value={this.state.enterFromDigit}

            />
          </View>

          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              placeholder="Enter to digit"
              placeholderTextColor="#003f5c"
              keyboardType="number-pad"
              maxLength={6}
              onChangeText={enterToDigit => this.setState({ enterToDigit })}
              value={this.state.enterToDigit}

            /></View>
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

    backgroundColor: Colors.bgColor ,
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    marginBottom: 8
  },

  startText: {
    color: "white"
  }
});

