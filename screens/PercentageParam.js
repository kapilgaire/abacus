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
} from 'react-native';import Colors from '../constants/Colors'

const PercentageParam = props => {

 

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
    <View style={styles.screen}>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Enter Lowest no. to percentage"
          placeholderTextColor="#003f5c"
          keyboardType="number-pad"
          maxLength={6}
      
        />
      </View>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Enter highest no. to percentage"
          placeholderTextColor="#003f5c"
          keyboardType="number-pad"
          maxLength={6}
       
        />
      </View>

      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Enter lowest value to percentage by"
          placeholderTextColor="#003f5c"
          keyboardType="number-pad"
          maxLength={6}
       
        />
      </View>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Enter highest value to percentage by"
          placeholderTextColor="#003f5c"
          keyboardType="number-pad"
          maxLength={6}
      
        />
      </View>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="No. of sum"
          placeholderTextColor="#003f5c"
          keyboardType="number-pad"
          maxLength={6}
        
        />
      </View>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Second to finish task"
          placeholderTextColor="#003f5c"
          keyboardType="number-pad"
          maxLength={6}
        
        />
      </View>
      <TouchableOpacity style={styles.startBtn}>
        <Text style={styles.startText}>START</Text>
      </TouchableOpacity>
    </View>
    </TouchableWithoutFeedback>
  );
};

PercentageParam.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');
  // const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  console.log("title " + catId);


  return {
    headerTitle: catId,
    headerStyle: {

      backgroundColor: Colors.primaryColor
    },
    headerTintColor: 'white'
  };

};

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

export default PercentageParam;
