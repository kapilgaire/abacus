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
  Share,
  ImageBackground
} from 'react-native';
import Constants from 'expo-constants';
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
      <ImageBackground
        source={require('../assets/abacus_bg.png')}
        style={{ width: window.width, height: window.height }}
      >
        <View style={styles.screen}>
          <TouchableCmp
            onPress={() => {

              props.navigation.navigate({
                routeName: 'AddParam'
              });
            }}>
            <View style={styles.grid}>
              <Text style={styles.title}>Addition</Text>
              <Image
                source={require('../assets/plus.png')}
                style={styles.categoryImg}

              />

            </View>

          </TouchableCmp>

          <TouchableCmp
            onPress={() => {

              props.navigation.navigate({
                routeName: 'AddSubParam'

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
                routeName: 'DecimalAddParam'
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
                routeName: 'MixAddSubParam'
              });
            }}>

            <View style={styles.grid} >
              <Text style={styles.title}>Mix Add/Sub</Text>
              <Image source={require('../assets/addition_subtraction.png')} style={styles.categoryImg} />

            </View>
          </TouchableCmp>

          <TouchableCmp

            onPress={() => {
              props.navigation.navigate({
                routeName: 'MulticationParam'
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
                routeName: 'LongMulticationParam'

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
                routeName: 'DivisionParam'
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
                routeName: 'DecimalDivisionParam'
              });
            }}

          >
            <View style={styles.grid} >
              <Text style={styles.title}>Decimal Division</Text>
              <Image source={require('../assets/division.png')} style={styles.categoryImg} />

            </View>
          </TouchableCmp>



          <TouchableCmp
            onPress={() => {

              props.navigation.navigate({
                routeName: 'SquareRootPractiseParam'
              });
            }}


          >
            <View style={styles.grid} >
              <Text style={styles.title}>Square Practice</Text>
              <Image source={require('../assets/square_practise.png')} style={styles.categoryImg} />

            </View>
          </TouchableCmp>


          <TouchableCmp
            onPress={() => {

              props.navigation.navigate({
                routeName: 'CubeRootPractiseParam'
              });
            }}


          >
            <View style={styles.grid} >
              <Text style={styles.title}>Cube Practice</Text>
              <Image source={require('../assets/cube_practise.png')} style={styles.categoryImg} />

            </View>
          </TouchableCmp>



          <TouchableCmp
            onPress={() => {

              props.navigation.navigate({
                routeName: 'SquareRootParam'
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
                routeName: 'CubeRootParam'
              });
            }}
          >

            <View style={styles.grid} >
              <Text style={styles.title}>Cube Root</Text>
              <Image source={require('../assets/cube_root.png')} style={styles.categoryImg} />

            </View>
          </TouchableCmp>

          <TouchableCmp

            onPress={() => {

              props.navigation.navigate({
                routeName: 'PercentageParam'
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
              props.navigation.navigate({
                routeName: 'DecimalMulticationParam'

              });
            }}
          >
            <View style={styles.grid} >
              <Text style={styles.title}>Decimal Multiplication</Text>
              <Image source={require('../assets/multiply.png')} style={styles.categoryImg} />

            </View>
          </TouchableCmp>

          <TouchableCmp
            onPress={() => {

              props.navigation.navigate({
                routeName: 'NegativeAddSubParam'
              });
            }}>

            <View style={styles.grid} >
              <Text style={styles.title}>Negative Add/Sub</Text>
              <Image source={require('../assets/addition_subtraction.png')} style={styles.categoryImg} />

            </View>
          </TouchableCmp>


          <TouchableCmp
            onPress={() => {

              props.navigation.navigate({
                routeName: 'ReCallNumberParam'
              });
            }}>

            <View style={styles.grid} >
              <Text style={styles.title}>Recall Numbers</Text>
              <Image source={require('../assets/recall_numbers.png')} style={styles.categoryImg} />

            </View>
          </TouchableCmp>













          <TouchableCmp

            onPress={() => {

              props.navigation.navigate({
                routeName: 'TableParam'
              });
            }}>
            <View style={styles.grid} >
              <Text style={styles.title}>Table Practice</Text>
              <Image source={require('../assets/multiply.png')} style={styles.categoryImg} />

            </View>
          </TouchableCmp>



          <TouchableCmp onPress={() => {
            props.navigation.navigate({
              routeName: 'MyStopwatch'
            });
          }}>
            <View style={styles.grid} >
              <Text style={styles.title}>Stopwatch</Text>
              <Image source={require('../assets/timer.png')} style={styles.categoryImg} />

            </View>
          </TouchableCmp>

          <TouchableCmp
            onPress={() => {

              props.navigation.navigate({
                routeName: 'MyCalculator'
              });

              // Linking.openURL('facebook://app')


            }}

          >
            <View style={styles.grid} >
              <Text style={styles.title}>Calculator</Text>
              <Image source={require('../assets/calculator.png')} style={styles.categoryImg} />

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
              <Image source={require('../assets/website_link.png')} style={styles.categoryImg} />

            </View>
          </TouchableCmp>

          <TouchableCmp
            onPress={() => {

              Linking.openURL('https://abacuschampsacademy.com/tables.aspx')

            }}

          >
            <View style={styles.grid} >
              <Text style={styles.title}>Go to Sheet Generator</Text>
              <Image source={require('../assets/sheet_generator.png')} style={styles.categoryImg} />

            </View>
          </TouchableCmp>

          <TouchableCmp
            onPress={() => {

              let packageName

              if (Platform.OS === 'android') {

                packageName = 'Check out this awesome app on Play Store & Enhance Your Calculation skill by practising. For more details visit www.abacuschampsacademy.com/. For app '
                  + Constants.manifest.android.package;
              } else {
                packageName = 'Check out this awesome app on App Store & Enhance Your Calculation skill by practising. For more details visit www.abacuschampsacademy.com/. For app ios';
              }
              Share.share({

                message: packageName


              })

            }}

          >
            <View style={styles.grid} >
              <Text style={styles.title}>Share</Text>
              <Image source={require('../assets/share_app.png')} style={styles.categoryImg} />

            </View>
          </TouchableCmp>


          <TouchableCmp

          >
            <View style={styles.grid} >
              <Text style={styles.title}>App Tutorial</Text>
              <Image source={require('../assets/app_tutorial.png')} style={styles.categoryImg} />

            </View>
          </TouchableCmp>


          <TouchableCmp

          >
            <View style={styles.grid} >
              <Text style={styles.title}>Youtube Link</Text>
              <Image source={require('../assets/youtube_link.png')} style={styles.categoryImg} />

            </View>
          </TouchableCmp>




        </View>
      </ImageBackground>

    </ScrollView >

  );
};

CategoriesScreen.navigationOptions = navData => {
  return {

    title: 'Abacus Champs Academy',
    headerStyle: {

      backgroundColor: '#6E3515'
    },
    headerTintColor: 'white',
    headerLeft: () =>
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}

        />

      </HeaderButtons>

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
    borderColor: '#ffe2b0',
    borderWidth: 2,
    height: 150,
    margin: 5,
    width: width / 2 - 10
  },
  categoryImg: {
    width: 80,
    height: 80,
    borderRadius: 80
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    textAlign: 'center'
  }


});

export default CategoriesScreen;
