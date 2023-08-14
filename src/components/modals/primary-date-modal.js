import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {mvs} from '../../services/metrices';
import colors from '../../services/colors';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-date-picker';
import PrimaryButton from '../buttons/button-primary';
const PrimaryDateModal = ({visible = false, onSelect = () => {}, value}) => {
  const [date, setDate] = useState(new Date(value));
  return (
    <Modal backdropOpacity={0.7} visible={visible}>
      <View style={styles.container}>
        <DatePicker
          date={date}
          fadeToColor={colors.white}
          mode="date"
          textColor={colors.black}
          onDateChange={date => {
            setDate(date);
          }}
        />
        <PrimaryButton
          title="Continue"
          onClick={() => onSelect(date)}
          titleStyle={{marginLeft: 0}}
        />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    height: mvs(200),
    backgroundColor: colors.white,
    position: 'absolute',
    elevation: 20,
    top: 0,
    borderRadius: mvs(20),
    left: 0,
    right: 0,
    paddingHorizontal: 0,
  },
});
export default PrimaryDateModal;
