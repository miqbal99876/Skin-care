//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import colors from '../../services/colors';
import AppHeader from '../../components/header/app-header';
import { Edit, GirlIcon, MHistory, PHistory, PInfo, Reset, Right, Setting, Supplement, UserProfie } from '../../assets/svgs';
import { mvs } from '../../services/metrices';
import Row from '../../components/atoms/row';
import Bold from '../../presentation/typography/bold-text';
import Regular from '../../presentation/typography/regular-text';

// create a component
const Profile = () => {
    return (
        <View style={styles.container}>
            <AppHeader title='Profile' leftIcon='LeftIcon' rightIcon='Message' />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.body}>
                    <Row style={styles.card} >
                        <View style={{ marginLeft: 20, flexDirection: 'row' }}>
                            <UserProfie />
                            <View style={{ marginLeft: 20 }}>
                                <Bold label={'Liza Trass'} />
                                <Regular label={'01.01.2022'} />
                                <Regular label={'+1234567889'} />
                            </View>
                        </View>
                        <Edit />
                    </Row>
                    <View style={styles.card1}>
                        <Row alignItems='center' style={{ marginLeft: 10, }}>
                            <MHistory />
                            <View style={{ marginRight: 15 }}>
                                <Bold label={'Medical History'} />
                            </View>
                            <View style={{ width: mvs(96), height: mvs(30), backgroundColor: '#1648CE', justifyContent: 'center', alignItems: 'center', borderRadius: 30, }}>
                                <Text style={{ color: colors.white }}>Read {'>'}</Text>
                            </View>
                        </Row>

                        <Regular label={'Check your All Medical History'} style={{ marginLeft: 20, marginTop: 10 }} />
                    </View>
                    <View style={styles.card1}>
                        <Row alignItems='center' style={{ marginLeft: 10, }}>
                            <PHistory />
                            <View style={{ marginRight: 15 }}>
                                <Bold label={'Lina’s History'} />
                            </View>
                            <View style={{ width: mvs(96), height: mvs(30), backgroundColor: '#1648CE', justifyContent: 'center', alignItems: 'center', borderRadius: 30, }}>
                                <Text style={{ color: colors.white }}>Read {'>'}</Text>
                            </View>
                        </Row>

                        <Regular label={'Receive and save up. Points to receive gifts'} style={{ marginLeft: 20, marginTop: 10 }} />
                    </View>
                    <Row alignItems='center' style={{ elevation: 10, backgroundColor: colors.white, height: mvs(70), paddingHorizontal: mvs(10), borderRadius: 10, marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Supplement />
                            <Regular label={'Medicine & Supplements'} style={{ marginLeft: 20 }} />
                        </View>

                        <Right />
                    </Row>
                    <Row alignItems='center' style={{ elevation: 10, backgroundColor: colors.white, height: mvs(70), paddingHorizontal: mvs(10), borderRadius: 10, marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <PInfo />
                            <Regular label={'Personal Information'} style={{ marginLeft: 20 }} />
                        </View>

                        <Right />
                    </Row>
                    <Row alignItems='center' style={{ elevation: 10, backgroundColor: colors.white, height: mvs(70), paddingHorizontal: mvs(10), borderRadius: 10, marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Setting />
                            <Regular label={'Profile Settings'} style={{ marginLeft: 20 }} />
                        </View>

                        <Right />
                    </Row>
                    <Row alignItems='center' style={{ elevation: 10, backgroundColor: colors.white, height: mvs(70), paddingHorizontal: mvs(10), borderRadius: 10, marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Reset />
                            <Regular label={'Reset password'} style={{ marginLeft: 20 }} />
                        </View>

                        <Right />
                    </Row>
                </View>
            </ScrollView>


        </View >
    );
};

// define your styles


//make this component available to the app
export default Profile;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    body: {
        paddingTop: mvs(25),
        paddingHorizontal: mvs(20),
        marginBottom: 100,

    },
    card: {
        flexDirection: 'row',
        backgroundColor: 'white',
        elevation: 10, padding: 10,
        justifyContent: 'space-between',
        borderRadius: 10,
        marginBottom: 20
    },
    card1: {


        backgroundColor: 'white',
        elevation: 10, padding: 10,

        borderRadius: 10,
        marginBottom: 20
    },
});