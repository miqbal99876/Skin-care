//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../services/colors';
import { UvIcon } from '../../assets/svgs';
import { mvs } from '../../services/metrices';
import Regular from '../../presentation/typography/regular-text';
import PrimaryButton from '../../components/buttons/button-primary';

// create a component
const Uv = () => {
    return (
        <View style={styles.container}>

            <View style={styles.img}>
                <UvIcon />
            </View>
            <View style={{ marginHorizontal: 30, marginTop: 10 }}>
                <Text style={{ textAlign: 'center', lineHeight: 20 }} >By knowing  your location, we can tell you your daily UV index so you can protect your skin'
                </Text>
            </View>
            <PrimaryButton title='My Skin Check' style={{ width: mvs(300), marginTop: mvs(50) }} />
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
    img: { height: mvs(320), width: mvs(320), justifyContent: 'center', alignItems: 'center', backgroundColor: colors.white, elevation: 20, borderRadius: 10 }
});

//make this component available to the app
export default Uv;
