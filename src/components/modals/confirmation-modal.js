import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {mvs} from '../../services/metrices';
import colors from '../../services/colors';
import Modal from 'react-native-modal';
import PrimaryButton from '../buttons/button-primary';
import Medium from '../../presentation/typography/medium-text';
import {Alert} from '../../assets/svgs';
import SemiBold from '../../presentation/typography/semibold-text';
const ConfirmationModal = ({
  visible = false,
  onOk,
  onCancel,
  title = 'Do you want to pay commission?',
}) => {
  return (
    <Modal backdropOpacity={0.7} isVisible={visible}>
      <View style={styles.container}>
        <Alert style={{alignSelf: 'center'}} />
        <SemiBold
          label={'Alert!'}
          color={colors.darkOrange}
          size={20}
          style={{alignSelf: 'center', marginTop: mvs(10)}}
        />
        <Medium
          label={title}
          numberOfLines={3}
          style={styles.desc}
          size={17}
          color={colors.black}
        />
        <PrimaryButton
          title={'YES'}
          onClick={onOk}
          titleStyle={{marginLeft: 0}}
        />
        <PrimaryButton
          title={'NO'}
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
    paddingHorizontal: mvs(20),
  },
  desc: {
    marginVertical: mvs(6),
    textAlign: 'center',
    marginHorizontal: mvs(10),
    lineHeight: mvs(26),
  },
});
export default ConfirmationModal;
