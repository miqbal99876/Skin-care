//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../services/colors';
import { GirlIcon, UserProfie } from '../../assets/svgs';
import { Header } from 'react-native-elements/dist/header/Header';
import AppHeader from '../../components/header/app-header';
import { mvs } from '../../services/metrices';
import Bold from '../../presentation/typography/bold-text';
import Regular from '../../presentation/typography/regular-text';
import Row from '../../components/atoms/row';


// create a component
const Chat = () => {
    return (
        <View style={styles.container}>
            <AppHeader title='Messages' leftIcon='LeftIcon' />
            <View style={styles.body}>


                {[1, 2, 3, 4, 5].map((item, index) => (

                    <Row key={index} alignItems='center' style={styles.card} >
                        <GirlIcon />
                        <View style={{ marginLeft: 20, }}>
                            <Bold label={'Anson Macholet'} />
                            <Regular label={'Lorem ispum ijuty hstc'} />
                        </View>
                    </Row>))}
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    body: {
        paddingHorizontal: mvs(20),
        marginTop: mvs(50)

    },
    card: {
        flexDirection: 'row',
        backgroundColor: 'white',
        elevation: 10, padding: 10,
        justifyContent: 'flex-start',
        borderRadius: 10,
        marginBottom: 20
    },
});

//make this component available to the app
export default Chat;
