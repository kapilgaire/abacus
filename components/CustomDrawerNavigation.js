import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Dimensions,
    Image
} from 'react-native';

import { DrawerItems } from 'react-navigation-drawer';
import Colors from '../constants/Colors'


const CustomDrawerNavigation = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={{ height: 250, backgroundColor: Colors.primaryColor }}>
                <View style={{ height: 200, backgroundColor: 'Green', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../assets/icon.png')} style={{ height: 150, width: 150 }} />
                </View>
            </View>

            <ScrollView>
                <DrawerItems {...props} />
            </ScrollView>

          
        </SafeAreaView>
        
    );
}

export default CustomDrawerNavigation;