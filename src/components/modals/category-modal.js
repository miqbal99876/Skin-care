import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import * as SVG from '../../assets/modal-svgs/index';
import {mvs} from '../../services/metrices';
import colors from '../../services/colors';
import Modal from 'react-native-modal';
import Bold from '../../presentation/typography/bold-text';
import PrimaryButton from '../buttons/button-primary';
import Regular from '../../presentation/typography/regular-text';
import PrimaryInput from '../input/primary-input';
import LinearGradient from 'react-native-linear-gradient';
import {Camera} from '../../assets/svgs';
import SERVICES from '../../services/common-services';
import Row from '../atoms/row';
const CategoryModal = ({
  buttonTitle = 'Dispatch Button',
  icon = 'Success',
  visible = false,
  onOk,
  description = 'Payment Recieved Thank you for Payment',
  fontSize = 19,
}) => {
  const [payload, setPayload] = React.useState({
    Category: '',
    ProfilePicture: {},
  });
  const Icon = SVG[icon];
  const pickImage = async side => {
    const image = await SERVICES._returnImageGallery();
    if (image == undefined) {
      return;
    } else {
      setPayload({...payload, ProfilePicture: image});
    }
  };
  return (
    <Modal backdropOpacity={0.7} isVisible={visible}>
      <View style={styles.container}>
        <Row alignItems="center" style={{marginTop: 20}}>
          <Regular
            label={'Add Categories'}
            value={payload.Category}
            onChange={val => setPayload({...payload, Category: val})}
            style={{}}
          />
          <TouchableOpacity onPress={onOk}
            style={{
              width: 45,
              height: 40,
              backgroundColor: colors.primary,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color:'white'}}>Save</Text>
          </TouchableOpacity>
        </Row>

        <PrimaryInput placeHolder="Category" />
        <PrimaryInput
          placeHolder="Sub Category"
          rightIcon="Down"
          readonly={false}
        />
        <TouchableOpacity
          style={styles.camera}
          onPress={() => pickImage('profile')}>
          <LinearGradient
            colors={colors.primaryLinear}
            style={styles.cameraIcon}>
            {payload.ProfilePicture?.uri ? (
              <Image
                source={{uri: payload.ProfilePicture?.uri}}
                style={styles.img}
              />
            ) : (
              <Camera />
            )}
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: mvs(20),
    backgroundColor: 'white',
    paddingBottom: mvs(50),
    borderRadius: mvs(10),
  },
  camera: {
    alignSelf: 'center',
    height: mvs(146),
    width: mvs(146),
    borderRadius: mvs(1000),
    borderColor: colors.primary,
    borderWidth: 2,
    backgroundColor: colors.white,
    padding: mvs(7),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  cameraIcon: {
    height: mvs(130),
    width: mvs(130),
    borderRadius: mvs(1000),
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: mvs(1000),
  },
});
export default CategoryModal;
