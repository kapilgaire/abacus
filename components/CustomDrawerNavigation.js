import React, { Component } from 'react';
import {

    View,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    Platform,
    TouchableNativeFeedback,
    Image,
    Linking,
    Share
} from 'react-native';

import { DrawerItems } from 'react-navigation-drawer';
import Colors from '../constants/Colors'


export default class CustomDrawerNavigation extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let TouchableCmp = TouchableOpacity;

        if (Platform.OS === 'android' && Platform.Version >= 21) {

            TouchableCmp = TouchableNativeFeedback;
        }
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <View style={{ height: 250, backgroundColor: Colors.primaryColor }}>
                    <View style={{ height: 200, backgroundColor: 'Green', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../assets/icon.png')} style={{ height: 150, width: 150 }} />
                    </View>
                </View>

                <ScrollView>
                    {/* <DrawerItems {...props} /> */}
                    <View>

                        <TouchableCmp
                            onPress={() => {

                                this.props.navigation.navigate({
                                    routeName: 'AddParam'
                                });
                            }}>
                            <View style={styles.navSectionStyle}>
                                <Image source={require('../assets/plus.png')} style={styles.categoryImg} />


                                <Text style={styles.navItemStyle} >Addition</Text>

                            </View>
                        </TouchableCmp>

                        <TouchableCmp
                            onPress={() => {

                                this.props.navigation.navigate({
                                    routeName: 'AddSubParam'
                                });
                            }}>
                            <View style={styles.navSectionStyle}>
                                <Image source={require('../assets/addition_subtraction.png')} style={styles.categoryImg} />


                                <Text style={styles.navItemStyle} >Add/Sub</Text>
                            </View>
                        </TouchableCmp>

                        <TouchableCmp
                            onPress={() => {

                                this.props.navigation.navigate({
                                    routeName: 'DecimalAddParam'
                                });
                            }}>
                            <View style={styles.navSectionStyle}>
                                <Image source={require('../assets/addition_subtraction.png')} style={styles.categoryImg} />


                                <Text style={styles.navItemStyle} >Decimal Add/Sub</Text>
                            </View>
                        </TouchableCmp>

                        <TouchableCmp
                            onPress={() => {

                                this.props.navigation.navigate({
                                    routeName: 'MixAddSubParam'
                                });
                            }}>
                            <View style={styles.navSectionStyle}>
                                <Image source={require('../assets/addition_subtraction.png')} style={styles.categoryImg} />

                                <Text style={styles.navItemStyle} >Mix Add/sub</Text>
                            </View>
                        </TouchableCmp>

                        <TouchableCmp
                            onPress={() => {

                                this.props.navigation.navigate({
                                    routeName: 'NegativeAddSubParam'
                                });
                            }}>
                            <View style={styles.navSectionStyle}>
                                <Image source={require('../assets/addition_subtraction.png')} style={styles.categoryImg} />

                                <Text style={styles.navItemStyle} >Negative Add/Sub</Text>
                            </View>
                        </TouchableCmp>


                        <TouchableCmp
                            onPress={() => {

                                this.props.navigation.navigate({
                                    routeName: 'ReCallNumberParam'
                                });
                            }}>
                            <View style={styles.navSectionStyle}>
                                <Image source={require('../assets/addition_subtraction.png')} style={styles.categoryImg} />

                                <Text style={styles.navItemStyle} >Recall Numbers</Text>
                            </View>
                        </TouchableCmp>

                        <TouchableCmp
                            onPress={() => {

                                this.props.navigation.navigate({
                                    routeName: 'MulticationParam'
                                });
                            }}>
                            <View style={styles.navSectionStyle}>
                                <Image source={require('../assets/multiply.png')} style={styles.categoryImg} />

                                <Text style={styles.navItemStyle} >Multiply</Text>
                            </View>
                        </TouchableCmp>

                        <TouchableCmp
                            onPress={() => {

                                this.props.navigation.navigate({
                                    routeName: 'LongMulticationParam'
                                });
                            }}>
                            <View style={styles.navSectionStyle}>
                                <Image source={require('../assets/multiply.png')} style={styles.categoryImg} />


                                <Text style={styles.navItemStyle} >Long Multiplication</Text>
                            </View>
                        </TouchableCmp>

                        <TouchableCmp
                            onPress={() => {

                                this.props.navigation.navigate({
                                    routeName: 'DivisionParam'
                                });
                            }}>
                            <View style={styles.navSectionStyle}>
                                <Image source={require('../assets/division.png')} style={styles.categoryImg} />

                                <Text style={styles.navItemStyle} >Division</Text>
                            </View>
                        </TouchableCmp>

                        <TouchableCmp
                            onPress={() => {

                                this.props.navigation.navigate({
                                    routeName: 'SquareRootParam'
                                });
                            }}>
                            <View style={styles.navSectionStyle}>
                                <Image source={require('../assets/square_root.png')} style={styles.categoryImg} />

                                <Text style={styles.navItemStyle} >Square Root</Text>
                            </View>
                        </TouchableCmp>


                        <TouchableCmp
                            onPress={() => {

                                this.props.navigation.navigate({
                                    routeName: 'CubeRootParam'
                                });
                            }}>
                            <View style={styles.navSectionStyle}>
                                <Image source={require('../assets/square_root.png')} style={styles.categoryImg} />

                                <Text style={styles.navItemStyle} >Cube Root</Text>
                            </View>
                        </TouchableCmp>


                        <TouchableCmp
                            onPress={() => {

                                this.props.navigation.navigate({
                                    routeName: 'SquareRootPractiseParam'
                                });
                            }}>
                            <View style={styles.navSectionStyle}>
                                <Image source={require('../assets/square_root.png')} style={styles.categoryImg} />

                                <Text style={styles.navItemStyle} >Square Practise</Text>
                            </View>
                        </TouchableCmp>

                        <TouchableCmp
                            onPress={() => {

                                this.props.navigation.navigate({
                                    routeName: 'CubeRootPractiseParam'
                                });
                            }}>
                            <View style={styles.navSectionStyle}>
                                <Image source={require('../assets/square_root.png')} style={styles.categoryImg} />

                                <Text style={styles.navItemStyle} >Square Practise</Text>
                            </View>
                        </TouchableCmp>

                        <TouchableCmp
                            onPress={() => {

                                this.props.navigation.navigate({
                                    routeName: 'TableParam'
                                });
                            }}>
                            <View style={styles.navSectionStyle}>
                                <Image source={require('../assets/multiply.png')} style={styles.categoryImg} />

                                <Text style={styles.navItemStyle} >Table Practice</Text>
                            </View>
                        </TouchableCmp>

                        <TouchableCmp
                            onPress={() => {

                                this.props.navigation.navigate({
                                    routeName: 'PercentageParam'
                                });
                            }}>
                            <View style={styles.navSectionStyle}>
                                <Image source={require('../assets/percentage.png')} style={styles.categoryImg} />


                                <Text style={styles.navItemStyle} >Percentage</Text>
                            </View>
                        </TouchableCmp>


                        <TouchableCmp
                            onPress={() => {

                                this.props.navigation.navigate({
                                    routeName: 'MyStopwatch'
                                });
                            }}>
                            <View style={styles.navSectionStyle}>
                                <Image source={require('../assets/timer.png')} style={styles.categoryImg} />

                                <Text style={styles.navItemStyle} >Stopwatch</Text></View>
                        </TouchableCmp>


                        <TouchableCmp
                            onPress={() => {

                                this.props.navigation.navigate({
                                    routeName: 'MyCalculator'
                                });
                            }}>
                            <View style={styles.navSectionStyle}>
                                <Image source={require('../assets/calculator.png')} style={styles.categoryImg} />


                                <Text style={styles.navItemStyle} >Calculator</Text></View>
                        </TouchableCmp>


                        <TouchableCmp
                            onPress={() => {
                                Linking.openURL('https://abacuschampsacademy.com/')

                            }}>
                            <View style={styles.navSectionStyle}>
                                <Image source={require('../assets/browser.png')} style={styles.categoryImg} />

                                <Text style={styles.navItemStyle} >Go to website</Text>
                            </View>
                        </TouchableCmp>


                        <TouchableCmp
                            onPress={() => {

                                Share.share({

                                    message: 'Check this new app'
                                })


                            }}>
                            <View style={styles.navSectionStyle}>
                                <Image source={require('../assets/share.png')} style={styles.categoryImg} />

                                <Text style={styles.navItemStyle} >Share</Text>

                            </View>
                        </TouchableCmp>

                        <TouchableCmp
                            onPress={() => {

                                Linking.openURL('https://abacuschampsacademy.com/tables.aspx')

                            }}

                        >

                            <View style={styles.navSectionStyle}>
                                <Image source={require('../assets/share.png')} style={styles.categoryImg} />

                                <Text style={styles.navItemStyle} >Go to Sheet Generator</Text>

                            </View>

                        </TouchableCmp>

                    </View>

                </ScrollView>


            </SafeAreaView>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1
    },
    navItemStyle: {
        paddingLeft: 10,
        fontFamily: 'open-sans-bold',
        fontSize: 15


    },
    navSectionStyle: {
        padding: 4,
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
    },
    sectionHeadingStyle: {
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    categoryImg: {
        width: 30,
        height: 30
    },
});
