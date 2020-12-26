import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    TouchableHighlight,
    Keyboard,
    FlatList,
    ScrollView
} from 'react-native';



export default class StopwatchLapList extends React.Component {



    padToTwo = (number) => (number <= 9 ? `0${number}` : number);


    render() {

        return (
            <ScrollView style={styles.scroll}>
                <FlatList
                    data={this.props.lap}
                    renderItem={({ item, index }) => <Text key={index + 1} style={styles.item}>{`#${index}                      `}{this.padToTwo(item.min)}:{this.padToTwo(item.sec)}:{this.padToTwo(item.msec)}</Text>}
                />
            </ScrollView>

        );

    }
}


const styles = StyleSheet.create({
    scroll: {
        flex:1,
        maxHeight: "63%",
        backgroundColor: "#FFFFFF",
    },

    item: {
        padding: 10,
        fontSize: 22,
        height: 44,
        color: "#000000",
        textAlign: "center",
        backgroundColor: "#fff",
        marginBottom: 1
    },
});
