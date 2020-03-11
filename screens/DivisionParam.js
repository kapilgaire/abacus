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

export default class DivisionParam extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      highNoToDiv: 0,
      lowNoToDiv: 0,
      highNoDivBy: 0,
      lowNoDivBy: 0,
      numOfSum: 0,
      timeToFinish: 0

    };
  }

  static navigationOptions = {
    headerTitle: 'Division',
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
              placeholder="Enter max answer"
              placeholderTextColor="#003f5c"
              keyboardType="number-pad"
              maxLength={6}
              onChangeText={highNoToDiv => this.setState({ highNoToDiv })}
              value={this.state.highNoToDiv}
            />
          </View>
          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              placeholder="Enter min answer"
              placeholderTextColor="#003f5c"
              keyboardType="number-pad"
              maxLength={6}
              onChangeText={lowNoToDiv => this.setState({ lowNoToDiv })}
              value={this.state.lowNoToDiv}
            />
          </View>

          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              placeholder="Enter max value to divide by"
              placeholderTextColor="#003f5c"
              keyboardType="number-pad"
              maxLength={6}
              onChangeText={highNoDivBy => this.setState({ highNoDivBy })}
              value={this.state.highNoDivBy}
            />
          </View>
          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              placeholder="Enter min value to divide by"
              placeholderTextColor="#003f5c"
              keyboardType="number-pad"
              maxLength={6}
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
              maxLength={6}
              onChangeText={numOfSum => this.setState({ numOfSum })}
              value={this.state.numOfSum}
            />
          </View>
          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              placeholder="Second to finish task"
              placeholderTextColor="#003f5c"
              keyboardType="number-pad"
              maxLength={6}
              onChangeText={timeToFinish => this.setState({ timeToFinish })}
              value={this.state.timeToFinish}
            />
          </View>
          <TouchableOpacity style={styles.startBtn}


            onPress={() => {

              this.props.navigation.navigate({
                routeName: 'DivisionOperation',
                params: {
                  LowNoToDiv: this.state.lowNoToDiv,
                  HighNoToDiv: this.state.highNoToDiv,
                  LowNoDivBy: this.state.lowNoDivBy,
                  HighNoDivBy: this.state.highNoDivBy,
                  NumOfSum: this.state.numOfSum,
                  TimeToFinish: this.state.timeToFinish

                }

              });
            }}
          >
            <Text style={styles.startText}>START</Text>
          </TouchableOpacity>
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

