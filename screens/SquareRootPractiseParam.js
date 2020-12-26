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

export default class SquareRootPractiseParam extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      numOfDigigt: '',
      numOfSum: '',
      timeInSeconds: ''
    };
  }


  static navigationOptions = {
    headerTitle: 'Square practice',
    headerStyle: {

      backgroundColor: Colors.primaryColor
    },
    headerTintColor: 'white'
  };

  GoToNextScreen() {
    if (this.state.numOfDigigt == '') {

      this.refs.toast.show('Enter Lenght of Root', 2000);
    } else if (this.state.numOfSum == '') {
      this.refs.toast.show('Enter Number of Sum', 2000);

    } else if (this.state.timeInSeconds == '') {
      this.refs.toast.show('Enter Time ', 2000);

    } else {
      this.props.navigation.navigate({
        routeName: 'SquareRootPractiseOperation',
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
              placeholder="Number of digit"
              placeholderTextColor="#003f5c"
              keyboardType="number-pad"
              maxLength={1}
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
              maxLength={9}
              onChangeText={numOfSum => this.setState({ numOfSum })}
              value={this.state.numOfSum}
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

    backgroundColor: Colors.bgColor,
    borderRadius: 5,
    height: 50,
    borderWidth:3,
    borderColor:Colors.whiteColor,

    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    marginBottom: 8
  },

  startText: {
    color: "white"
  }
});

