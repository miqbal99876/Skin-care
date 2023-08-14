//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from '../../services/colors';
import { Logo } from '../../assets/svgs';
import { mvs } from '../../services/metrices';

// create a component
const Body = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Logo />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    card: {
        height: mvs(500),
        width: mvs(280),
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        borderRadius: 20
    },
});

//make this component available to the app
export default Body;
