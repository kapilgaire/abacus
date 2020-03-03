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
} from 'react-native';
import Colors from '../constants/Colors'

const SquareRootParam = props => {

 


    return (
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
       <View style={styles.inputView} >
            <TextInput  
              style={styles.inputText}
              placeholder="Length of root" 
              placeholderTextColor="#003f5c"
              keyboardType="number-pad"
              maxLength={6}
           
             />
          </View>
          <View style={styles.inputView} >
            <TextInput  
              style={styles.inputText}
              placeholder="Number of Sum" 
              placeholderTextColor="#003f5c"
              keyboardType="number-pad"
              maxLength={6}
           
             />
          </View>
  
          <View style={styles.inputView} >
            <TextInput  
              style={styles.inputText}
              placeholder="Time in Seconds" 
              placeholderTextColor="#003f5c"
              keyboardType="number-pad"
              maxLength={6}
            
             />
          </View>
  
          <TouchableOpacity style={styles.startBtn}>
            <Text  style={styles.startText}>START</Text>
          </TouchableOpacity>
      </View>
      </TouchableWithoutFeedback>
    );
  };
  
  SquareRootParam.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    // const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  
    console.log("title "+catId);
    
  
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
   
      margin:8
    
    },
    inputView:{
      backgroundColor:"#FAFAFA",
      justifyContent:"center",
      padding:8,
      borderRadius:5,
      marginBottom:5
  
    },
  
    startBtn:{
      
      backgroundColor:Colors.primaryColor,
      borderRadius:5,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },
  
    startText:{
      color:"white"
    }
  });
  
  export default SquareRootParam;
  