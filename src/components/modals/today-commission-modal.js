import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {mvs} from '../../services/metrices';
import colors from '../../services/colors';
import Modal from 'react-native-modal';
import PrimaryButton from '../buttons/button-primary';
import PaymentItem from '../delivery/payment-item';
const TodayCommissionModal = ({visible = false, onOk, onCancel, item}) => {
  return (
    <Modal backdropOpacity={0.7} isVisible={visible}>
      <View style={styles.container}>
        <PaymentItem item={item} onPay={onOk} />
        <PrimaryButton
          title={'Close'}
          color={colors.whiteLinear}
          onClick={onCancel}
          titleStyle={{color: colors.lightgrey1, marginLeft: 0}}
          style={{borderWidth: 1, borderColor: colors.black}}
        />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    ...colors.shadow,
    borderRadius: mvs(15),
    paddingVertical: mvs(12),
    paddingHorizontal: mvs(10),
  },
  desc: {
    marginVertical: mvs(6),
    textAlign: 'center',
    marginHorizontal: mvs(10),
    lineHeight: mvs(26),
  },
});
export default TodayCommissionModal;
