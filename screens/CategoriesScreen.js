import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  Platform,
  TouchableNativeFeedback,
  Linking,
  Share
} from 'react-native';

import Colors from '../constants/Colors';



import { ScrollView } from 'react-native-gesture-handler';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

var width = Dimensions.get('window').width

const CategoriesScreen = props => {

  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {

    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TouchableCmp
          onPress={() => {

            props.navigation.navigate({
              routeName: 'AddParam',
              params: {
                categoryId: "Addition"
              }
            });
          }}>
          <View style={styles.grid}>
            <Text style={styles.title}>Addition</Text>
            <Image source={require('../assets/plus.png')} style={styles.categoryImg}
  
            />

          </View>

        </TouchableCmp>

        <TouchableCmp
          onPress={() => {

            props.navigation.navigate({
              routeName: 'AddSubParam',
              params: {
                categoryId: "Add/Sub"
              }

            });



          }
          }
        >
          <View style={styles.grid} >
            <Text style={styles.title}>Add/Sub</Text>
            <Image source={require('../assets/addition_subtraction.png')} style={styles.categoryImg} />

          </View>
        </TouchableCmp>


        <TouchableCmp

          onPress={() => {

            props.navigation.navigate({
              routeName: 'DecimalAddParam',
              params: {
                categoryId: "Decimal Add/Sub"
              }
            });
          }}>

          <View style={styles.grid} >
            <Text style={styles.title}>Decimal Add/Sub</Text>
            <Image source={require('../assets/addition_subtraction.png')} style={styles.categoryImg} />

          </View>
        </TouchableCmp>

        <TouchableCmp

          onPress={() => {
            props.navigation.navigate({
              routeName: 'MulticationParam',
              params: {
                categoryId: "Multiply"
              }
            });
          }}>
          <View style={styles.grid} >
            <Text style={styles.title}>Multiply</Text>
            <Image source={require('../assets/multiply.png')} style={styles.categoryImg} />

          </View>
        </TouchableCmp>

        <TouchableCmp
          onPress={() => {
            props.navigation.navigate({
              routeName: 'LongMulticationParam',
              params: {
                categoryId: "Long Multiplication"
              }
            });
          }}
        >
          <View style={styles.grid} >
            <Text style={styles.title}>Long Multiplication</Text>
            <Image source={require('../assets/multiply.png')} style={styles.categoryImg} />

          </View>
        </TouchableCmp>

        <TouchableCmp

          onPress={() => {

            props.navigation.navigate({
              routeName: 'DivisionParam',
              params: {
                categoryId: "Division"
              }
            });
          }}

        >
          <View style={styles.grid} >
            <Text style={styles.title}>Division</Text>
            <Image source={require('../assets/division.png')} style={styles.categoryImg} />

          </View>
        </TouchableCmp>

        <TouchableCmp
          onPress={() => {

            props.navigation.navigate({
              routeName: 'SquareRootParam',
              params: {
                categoryId: "Square Root"
              }
            });
          }}


        >
          <View style={styles.grid} >
            <Text style={styles.title}>Square Root</Text>
            <Image source={require('../assets/square_root.png')} style={styles.categoryImg} />

          </View>
        </TouchableCmp>

        <TouchableCmp
          onPress={() => {

            props.navigation.navigate({
              routeName: 'CubeRootParam',
              params: {
                categoryId: "Cube Root"
              }
            });
          }}
        >

          <View style={styles.grid} >
            <Text style={styles.title}>Cube Root</Text>
            <Image source={require('../assets/square_root.png')} style={styles.categoryImg} />

          </View>
        </TouchableCmp>

        <TouchableCmp

          onPress={() => {

            props.navigation.navigate({
              routeName: 'TableParam',
              params: {
                categoryId: "Table Practice"
              }
            });
          }}>
          <View style={styles.grid} >
            <Text style={styles.title}>Table Practice</Text>
            <Image source={require('../assets/multiply.png')} style={styles.categoryImg} />

          </View>
        </TouchableCmp>

        <TouchableCmp

          onPress={() => {

            props.navigation.navigate({
              routeName: 'PercentageParam',
              params: {
                categoryId: "Percentage"
              }
            });
          }}
        >
          <View style={styles.grid} >
            <Text style={styles.title}>Percentage</Text>
            <Image source={require('../assets/percentage.png')} style={styles.categoryImg} />

          </View>
        </TouchableCmp>

        <TouchableCmp

          onPress={() => {

           
          }}
        >
          <View style={styles.grid} >
            <Text style={styles.title}>Stopwatch</Text>
            <Image source={require('../assets/browser.png')} style={styles.categoryImg} />

          </View>
        </TouchableCmp>

        <TouchableCmp
          onPress={() => {

          
          }}

        >
          <View style={styles.grid} >
            <Text style={styles.title}>Calculator</Text>
            <Image source={require('../assets/browser.png')} style={styles.categoryImg} />

          </View>

        </TouchableCmp>

        <TouchableCmp
          onPress={() => {


            Linking.openURL('https://abacuschampsacademy.com/')
            // console.log("Go to website ");

          }}

        >
          <View style={styles.grid} >
            <Text style={styles.title}>Go to Website</Text>
            <Image source={require('../assets/browser.png')} style={styles.categoryImg} />

          </View>
        </TouchableCmp>

        <TouchableCmp
          onPress={() => {


            Share.share({

              message: 'Check this new app'
            })

            // console.log("Share ");
          }}

        >
          <View style={styles.grid} >
            <Text style={styles.title}>Share</Text>
            <Image source={require('../assets/share.png')} style={styles.categoryImg} />

          </View>
        </TouchableCmp>

      </View>
    </ScrollView >

  );
};

CategoriesScreen.navigationOptions = navData => {
  return {

    title: 'Abacus Champs Academy',
    headerStyle: {

      backgroundColor: Colors.primaryColor
    },
    headerTintColor: 'white',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}

        />

      </HeaderButtons>
    )
  };
};


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'

  },

  grid: {

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    height: 150,
    margin: 5,
    width: width / 2 - 10
  },
  categoryImg: {
    width: 80,
    height: 80
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    textAlign: 'right'
  }


});

export default CategoriesScreen;
