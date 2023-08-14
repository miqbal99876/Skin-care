import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import PrimaryButton from '../../../components/buttons/button-primary';
import PrimaryInput from '../../../components/input/primary-input';
import PrimaryModal from '../../../components/modals/primary-modal';
import Regular from '../../../presentation/typography/regular-text';
import colors from '../../../services/colors';
import {mvs} from '../../../services/metrices';
import {Signup_Styles as styles} from './signup-three.style';
import DoctorInput from '../../../components/input/doctor-input';
import {Camera} from '../../../assets/svgs';
import LinearGradient from 'react-native-linear-gradient';
import SERVICES from '../../../services/common-services';
const SignupThree = props => {
  const {signin} = props;
  const navigation = useNavigation();
  const [hide, setHide] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState('');
  const [selectedOption, setSelectedOption] = useState('Store Owner');
  const [payload, setPayload] = React.useState({
   bio: '',
   workingHours: '',
    phoneNumber: '',
    password: '',
    ProfilePicture: {},
  });
  function showAlert(msg) {
    setError(msg);
    setShowError(true);
  }
  const pickImage = async side => {
    const image = await SERVICES._returnImageGallery();
    if (image == undefined) {
      return;
    }
    setPayload({...payload, ProfilePicture: image});
  };

  return (
    <View style={{...styles.container}}>
      <View style={{paddingHorizontal: mvs(46), marginTop: mvs(30)}}>
        <Image
          source={require('../../../assets/images/logo.png')}
          style={{alignSelf: 'center'}}
        />
        <View>
          <Image
            source={require('../../../assets/images/doctor.png')}
            style={{alignSelf: 'center', marginTop: 10}}
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
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          <View style={{paddingTop: mvs(25)}}>
            <Regular label={'Doctor Bio'} />
            <DoctorInput
              value={payload.bio}
              onChange={val => setPayload({...payload, bio: val})}
              placeHolder="30 word limit"
              style={{paddingTop: mvs(25)}}
            />

            <Regular label={'Working Hours'} style={{marginTop: mvs(40)}} />
            <DoctorInput
              value={payload.workingHours}
              onChange={val => setPayload({...payload, workingHours: val})}
            rightIcon='Down'
              placeHolder="Mon - Fri 09.00 AM - 08.00 PM"
              style={{paddingTop: mvs(25)}}
            />
            <PrimaryButton
              fontSize={18}
              title="Step  3/4"
              style={{marginTop: mvs(25)}}
              onClick={() => navigation.navigate('SignupFour')}
            />
            <Regular
              label={'Already have an account? Sign in'}
              style={{marginTop: mvs(51), alignSelf: 'center'}}
              color={colors.primary}
            />
          </View>
        </View>
      </ScrollView>
      <PrimaryModal
        title="Login Account"
        description={error}
        visible={showError}
        buttonTitle="OK"
        icon="Alert"
        onOk={() => setShowError(false)}
      />
    </View>
  );
};

export default SignupThree;
