//import liraries
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Line2, Tick} from '../../assets/svgs';
import Bold from '../../presentation/typography/bold-text';
import Regular from '../../presentation/typography/regular-text';
import colors from '../../services/colors';
import {mvs} from '../../services/metrices';
import Row from '../atoms/row';
import {useNavigation} from '@react-navigation/native';
// create a component
const AppointmentItem = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState('Male');
  const handleRadioButtonPress = option => {
    setSelectedOption(option);
  };
  return (
    <TouchableOpacity onPress={() => navigation.navigate('AppointmentDetails')}>
      <Row style={styles.card}>
        <Line2 style={{marginTop: mvs(10)}} />
        <View style={{flex: 1, marginLeft: mvs(10)}}>
          <Row alignItems="center">
            <Bold label={'Nene Kumoji '} />

            <Regular label={'June 12, 10: AM'} />
          </Row>
          <Regular
            label={
              'I am a Cardio Patinet. Feel sick last 2 weeks. I need to talk about cardio problem.'
            }
            size={mvs(14)}
            numberOfLines={3}
          />
          <Row style={{marginTop: 5}} alignItems="center">
            <Row alignItems="center" style={{width: '50%'}}>
              <Tick />
              <Regular
                label={'3 Days Symtoms'}
                size={mvs(12)}
                style={{marginLeft: mvs(5), flex: 1}}
              />
            </Row>
            <Row alignItems="center" style={{width: '50%'}}>
              <Tick />
              <Regular
                size={mvs(12)}
                label={'Male'}
                style={{marginLeft: mvs(5), flex: 1}}
              />
            </Row>
          </Row>
          <Row style={{marginTop: 5}} alignItems="center">
            <Row alignItems="center" style={{width: '50%'}}>
              <Tick />
              <Regular
                size={mvs(12)}
                label={'30+'}
                style={{marginLeft: mvs(5), flex: 1}}
              />
            </Row>
            <Row alignItems="center" style={{width: '50%'}}>
              <Tick />
              <Regular
                size={mvs(12)}
                label={'Home Visit'}
                style={{marginLeft: mvs(5), flex: 1}}
              />
            </Row>
          </Row>
        </View>
      </Row>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  body: {
    flex: 1,
    paddingHorizontal: mvs(22),
    paddingTop: mvs(5),
  },
  file: {
    height: mvs(66),
    marginTop: mvs(20),
  },
  input: {
    flex: 1,
    paddingHorizontal: mvs(15),
    color: colors.black,
  },

  check: {
    flexDirection: 'row',
    marginTop: mvs(34),
  },
  checkbox: {
    marginRight: mvs(10),
  },
  label: {
    fontSize: mvs(16),
    flex: 1,
  },
  card: {
    marginTop: mvs(30),
    backgroundColor: colors.white,
    elevation: mvs(10),
    paddingHorizontal: mvs(20),
    paddingTop: mvs(10),
    paddingBottom: mvs(10),
    borderRadius: mvs(10),
  },
});

//make this component available to the app
export default AppointmentItem;
