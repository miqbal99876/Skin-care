import React from 'react';
import {ScrollView, View} from 'react-native';
import AppointmentItem from '../../../components/appointmentcard';
import AppHeader from '../../../components/header/app-header';
import colors from '../../../services/colors';
import {mvs} from '../../../services/metrices';
import {Home_Styles as styles} from './style';
const History = props => {
  return (
    <View style={{...styles.container}}>
      <AppHeader title="History" titleStyle={{color: colors.lightgrey1}} />
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

export default History;
