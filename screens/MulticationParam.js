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

export default class MulticationParam extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      lowNoToMul: '',
      highNoToMul: '',
      lowNoMulBy: '',
      highNoMulBy: '',
      numOfSum: '',
      timeToFinish: ''

    };
  }

  static navigationOptions = {
    headerTitle: 'Multiplication',
    headerStyle: {

      backgroundColor: Colors.primaryColor
    },
    headerTintColor: 'white'
  };

  GoToNextScreen() {
    if (this.state.lowNoToMul == '') {

      this.refs.toast.show('Enter lowest no. to Multiply',DURATION.LENGTH_LONG);
    } else if (this.state.highNoToMul == '') {
      this.refs.toast.show('Enter highest no. to Multiply',DURATION.LENGTH_LONG);

    } else if (this.state.lowNoMulBy == '') {
      this.refs.toast.show('Enter Lowest no. to Multiply by ',DURATION.LENGTH_LONG);

    } else if (this.state.highNoMulBy == '') {
      this.refs.toast.show('Enter Highest no. to Multiply by ',DURATION.LENGTH_LONG);

    } else if (this.state.numOfSum == '') {
      this.refs.toast.show('Enter no. of sum',DURATION.LENGTH_LONG);

    } else if (this.state.timeToFinish == '') {
      this.refs.toast.show('Enter Time to finish',DURATION.LENGTH_LONG);

    } else {
      this.props.navigation.navigate({
        routeName: 'MultiplicationOperation',
        params: {
          LowNoToMul: this.state.lowNoToMul,
          HighNoToMul: this.state.highNoToMul,
          LowNoMulBy: this.state.lowNoMulBy,
          HighNoMulBy: this.state.highNoMulBy,
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
              placeholder="Enter lowest no. to multiply"
              placeholderTextColor="#003f5c"
              keyboardType="number-pad"
              maxLength={6}
              onChangeText={lowNoToMul => this.setState({ lowNoToMul })}
              value={this.state.lowNoToMul}

            />
          </View>
          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              placeholder="Enter highest value to multiply"
              placeholderTextColor="#003f5c"
              keyboardType="number-pad"
              maxLength={6}
              onChangeText={highNoToMul => this.setState({ highNoToMul })}
              value={this.state.highNoToMul}

            />
          </View>

          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              placeholder="Enter lowest value to multiply by"
              placeholderTextColor="#003f5c"
              keyboardType="number-pad"
              maxLength={6}
              onChangeText={lowNoMulBy => this.setState({ lowNoMulBy })}
              value={this.state.lowNoMulBy}
            />
          </View>
          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              placeholder="Enter highest value to multiply by"
              placeholderTextColor="#003f5c"
              keyboardType="number-pad"
              maxLength={6}
              onChangeText={highNoMulBy => this.setState({ highNoMulBy })}
              value={this.state.highNoMulBy}

            />
          </View>
          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              placeholder="No. of sum"
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

              this.GoToNextScreen();
            }}
          >
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

    backgroundColor: Colors.bgColor,
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

