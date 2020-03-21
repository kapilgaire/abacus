import React, { useState } from 'react';
import {
  View,
  Text,
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

      lowNoToPer: '',
      highNoToPer: '',
      lowNoPerBy: '',
      highNoPerBy: '',
      numOfSum: '',
      timeToFinish: ''

    };
  }

  static navigationOptions = {
    headerTitle: 'Percentage',
    headerStyle: {

      backgroundColor: Colors.primaryColor
    },
    headerTintColor: 'white'
  };

  GoToNextScreen() {
    if (this.state.lowNoToPer == '') {

      this.refs.toast.show('Enter lowest no. to Percentage',DURATION.LENGTH_LONG);
    } else if (this.state.highNoToPer == '') {
      this.refs.toast.show('Enter highest no. to Percentage',DURATION.LENGTH_LONG);

    } else if (this.state.lowNoPerBy == '') {
      this.refs.toast.show('Enter Lowest no. to Percentage by ',DURATION.LENGTH_LONG);

    } else if (this.state.highNoPerBy == '') {
      this.refs.toast.show('Enter Highest no. to Percentage by ',DURATION.LENGTH_LONG);

    } else if (this.state.numOfSum == '') {
      this.refs.toast.show('Enter no. of sum',DURATION.LENGTH_LONG);

    } else if (this.state.timeToFinish == '') {
      this.refs.toast.show('Enter Time to finish',DURATION.LENGTH_LONG);

    } else {
      this.props.navigation.navigate({
        routeName: 'PercentageOperation',
        params: {
          LowNoToPer: this.state.lowNoToPer,
          HighNoToPer: this.state.highNoToPer,
          LowNoPerBy: this.state.lowNoPerBy,
          HighNoPerBy: this.state.highNoPerBy,
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
              placeholder="Enter lowest no. to Percentage"
              placeholderTextColor="#003f5c"
              keyboardType="number-pad"
              maxLength={6}
              onChangeText={lowNoToPer => this.setState({ lowNoToPer })}
              value={this.state.lowNoToPer}

            />
          </View>
          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              placeholder="Enter highest value to Percentage"
              placeholderTextColor="#003f5c"
              keyboardType="number-pad"
              maxLength={6}
              onChangeText={highNoToPer => this.setState({ highNoToPer })}
              value={this.state.highNoToPer}

            />
          </View>

          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              placeholder="Enter lowest value to Percentage by"
              placeholderTextColor="#003f5c"
              keyboardType="number-pad"
              maxLength={6}
              onChangeText={lowNoPerBy => this.setState({ lowNoPerBy })}
              value={this.state.lowNoPerBy}
            />
          </View>
          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              placeholder="Enter highest value to multiply by"
              placeholderTextColor="#003f5c"
              keyboardType="number-pad"
              maxLength={6}
              onChangeText={highNoPerBy => this.setState({ highNoPerBy })}
              value={this.state.highNoPerBy}

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

