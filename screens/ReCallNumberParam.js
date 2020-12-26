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

export default class ReCallNumberParam extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      numOfDigigt: '',
      timeInSeconds: ''
    };
  }


  static navigationOptions = {
    headerTitle: 'Recall Numbers',
    headerStyle: {

      backgroundColor: Colors.primaryColor
    },
    headerTintColor: 'white'
  };

  GoToNextScreen() {
    if (this.state.numOfDigigt == '') {

      this.refs.toast.show('Enter Number of Digit', 2000);
    } else if (parseInt(this.state.numOfDigigt) > 15) {

      this.refs.toast.show('Enter Number between 0 to 15', 2000);
    } else if (this.state.timeInSeconds == '') {
      this.refs.toast.show('Enter Time ', 2000);

    } else {
      this.props.navigation.navigate({
        routeName: 'ReCallNumberOperation',
        params: {
          NumOfDigit: this.state.numOfDigigt,
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
              placeholder="Number of digit"
              placeholderTextColor="#003f5c"
              keyboardType="number-pad"
              maxLength={2}
              onChangeText={numOfDigigt => this.setState({ numOfDigigt })}

              value={this.state.numOfDigigt}

            />
          </View>


          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              placeholder="Time in Seconds"
              placeholderTextColor="#003f5c"
              keyboardType="numeric"
              maxLength={9}
              onChangeText={timeInSeconds => this.setState({ timeInSeconds })}
              value={this.state.timeInSeconds}
            />
          </View>

          <TouchableOpacity style={styles.startBtn} onPress={() => {


            this.GoToNextScreen();
          }}>
            <Text style={styles.startText}>START</Text>
          </TouchableOpacity>

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

    backgroundColor: Colors.btnColor,
    borderWidth: 3,
    borderColor: Colors.whiteColor,
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

