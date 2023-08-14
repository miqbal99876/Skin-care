import React, {useState} from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {BellIcon} from '../../../assets/svgs';
import AppointmentItem from '../../../components/appointmentcard';
import Row from '../../../components/atoms/row';
import Bold from '../../../presentation/typography/bold-text';
import Regular from '../../../presentation/typography/regular-text';
import {mvs} from '../../../services/metrices';
import {Home_Styles as styles} from './doctor-home.style';
import {useNavigation} from '@react-navigation/native';
const DoctorHome = props => {
  const navigation = useNavigation();
  return (
    <View style={{...styles.container}}>
      <View style={{paddingHorizontal: mvs(22)}}>
        <Row alignItems="center" style={styles.file}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('../../../assets/images/profile.png')} />
            <View style={{marginLeft: 10}}>
              <Regular label={'Dr Tierra Riely'} />
              <Regular label={'Find patient requests here'} size={10} />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('DoctorNotification')}>
            <BellIcon />
          </TouchableOpacity>
        </Row>
        <Row
          style={{marginTop: mvs(26), marginBottom: mvs(10)}}
          alignItems="center">
          <Bold label={'Patient Requests'} />
          <Regular label={'View all'} />
        </Row>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: mvs(20)}}>
        <View style={styles.body}>
          {[1, 2, 3, 4].map(index => (
            <AppointmentItem key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default DoctorHome;
