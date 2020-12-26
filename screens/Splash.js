//Import React and Hooks we needed
import React, { useState, useEffect } from 'react';

//Import all required component
import { ActivityIndicator, View, StyleSheet, Image, ImageBackground, Text } from 'react-native';
import Colors from '../constants/Colors'

const SplashScreen = props => {
    //State for ActivityIndicator animation
    let [animating, setAnimating] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setAnimating(false);

            /* go to Main screen */
            props.navigation.navigate('Home')

            // props.navigation.navigate('LoginScreen')


        }, 3000);
    }, []);

    return (
        <View style={styles.container} >


            <Image
                source={require('../assets/icon.png')}
                style={{
                    resizeMode: 'contain',
                    alignSelf: 'center',
                    width: 180,
                    height: 180,
                    marginBottom: 20
                }
                }
            />

            <Text style={{ fontSize: 20, color: '#000000', textAlign: 'center' }}> 
            ABACUS CHAMPS ACADEMY,
            65 WORLD RECORDS 72 NATIONAL RECORDS
            IN LIMCA BOOK OF RECOREDS (IN DIFFRENT
            CATEGORIES OF CALCULATION)</Text>



        </View >
    );
};

export default SplashScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});