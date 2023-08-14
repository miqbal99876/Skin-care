import React from 'react';
import {View, StyleSheet} from 'react-native';
import * as SVG from '../../assets/modal-svgs/index';
import {mvs} from '../../services/metrices';
import colors from '../../services/colors';
import Modal from 'react-native-modal';
import Bold from '../../presentation/typography/bold-text';
import PrimaryButton from '../buttons/button-primary';
const PrimaryModal = ({
  buttonTitle = 'Dispatch Button',
  icon = 'Success',
  visible = false,
  onOk,
  description = 'Payment Recieved Thank you for Payment',
  fontSize = 14,
  titleFontSize = 20,
  title,
  titleStyle,
  descriptionStyle,
}) => {
  const Icon = SVG[icon];

  return (
    <Modal backdropOpacity={0.7} isVisible={visible}>
      <View style={styles.container}>
        {Icon && <Icon style={{alignSelf: 'center'}} />}
        {title && (
          <Bold
            label={title}
            style={{...styles.title, ...titleStyle}}
            size={titleFontSize}
            color={colors.lightgrey2}
          />
        )}
        <Bold
          label={description}
          numberOfLines={3}
          style={{...styles.description, ...descriptionStyle}}
          size={fontSize}
          color={colors.lightgrey1}
        />
        <PrimaryButton
          title={buttonTitle}
          titleStyle={{marginLeft: 0}}
          onClick={onOk}
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
    paddingVertical: mvs(33),
    paddingHorizontal: mvs(20),
  },
  title: {
    marginVertical: mvs(5),
    marginTop: mvs(10),
    textAlign: 'center',
    alignSelf: 'center',
    lineHeight: mvs(26),
  },
  description: {
    marginVertical: mvs(10),
    textAlign: 'center',
    marginHorizontal: mvs(20),
    lineHeight: mvs(23),
  },
});
export default PrimaryModal;
