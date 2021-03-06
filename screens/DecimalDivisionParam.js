import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'; import Colors from '../constants/Colors'
import Toast, { DURATION } from 'react-native-easy-toast';


export default class DecimalDivisionParam extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      highNoToDiv: '',
      lowNoToDiv: '',
      highNoDivBy: '',
      lowNoDivBy: '',
      numOfSum: '',
      timeToFinish: ''

    };
  }

  static navigationOptions = {
    headerTitle: 'Decimal Division',
    headerStyle: {

      backgroundColor: Colors.primaryColor
    },
    headerTintColor: 'white'
  };

  GoToNextScreen() {
    if (this.state.lowNoToDiv == '') {

      this.refs.toast.show('Enter lowest no. to Divide', 2000);
    } else if (this.state.highNoToDiv == '') {
      this.refs.toast.show('Enter highest no. to Divide', 2000);

    } else if (this.state.lowNoDivBy == '') {
      this.refs.toast.show('Enter Lowest no. to divide vy ', 2000);

    } else if (this.state.highNoDivBy == '') {
      this.refs.toast.show('Enter Highest no. to divide by ', 2000);

    } else if (this.state.numOfSum == '') {
      this.refs.toast.show('Enter no. of sum', 2000);

    } else if (this.state.timeToFinish == '') {
      this.refs.toast.show('Enter Time to finish', 2000);

    } else {
      this.props.navigation.navigate({
        routeName: 'DecimalDivisionOperation',
        params: {
          LowNoToDiv: this.state.lowNoToDiv,
          HighNoToDiv: this.state.highNoToDiv,
          LowNoDivBy: this.state.lowNoDivBy,
          HighNoDivBy: this.state.highNoDivBy,
          NumOfSum: this.state.numOfSum,
          TimeToFinish: this.state.timeToFinish

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
              placeholder="Enter min answer"
              placeholderTextColor="#003f5c"
              keyboardType="number-pad"
              maxLength={9}
              onChangeText={highNoToDiv => this.setState({ highNoToDiv })}
              value={this.state.highNoToDiv}
            />
          </View>
          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              placeholder="Enter max answer"
              placeholderTextColor="#003f5c"
              keyboardType="number-pad"
              maxLength={9}
              onChangeText={lowNoToDiv => this.setState({ lowNoToDiv })}
              value={this.state.lowNoToDiv}
            />
          </View>

          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              placeholder="Enter min value to divide by"
              placeholderTextColor="#003f5c"
              keyboardType="number-pad"
              maxLength={9}
              onChangeText={highNoDivBy => this.setState({ highNoDivBy })}
              value={this.state.highNoDivBy}
            />
          </View>
          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              placeholder="Enter max value to divide by"
              placeholderTextColor="#003f5c"
              keyboardType="number-pad"
              maxLength={9}
              onChangeText={lowNoDivBy => this.setState({ lowNoDivBy })}
              value={this.state.lowNoDivBy}
            />
          </View>
          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              placeholder="No. of Sum"
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
              placeholder="Second to finish task"
              placeholderTextColor="#003f5c"
              keyboardType="numeric"
              maxLength={9}
              onChangeText={timeToFinish => this.setState({ timeToFinish })}
              value={this.state.timeToFinish}
            />
          </View>
          <TouchableOpacity style={styles.startBtn}


            onPress={() => {

              this.GoToNextScreen();
            }}
          >
            <Text style={styles.startText}>START</Text>
          </TouchableOpacity>
          <Toast ref="toast"
            position='center'
          />

        </View></TouchableWithoutFeedback>
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

