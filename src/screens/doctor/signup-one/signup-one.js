import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, ScrollView, View } from 'react-native';
import PrimaryButton from '../../../components/buttons/button-primary';
import PrimaryInput from '../../../components/input/primary-input';
import PrimaryModal from '../../../components/modals/primary-modal';
import Regular from '../../../presentation/typography/regular-text';
import colors from '../../../services/colors';
import { mvs } from '../../../services/metrices';
import { Signup_Styles as styles } from './signup-one.style';
const SignupOne = props => {
  const {signin} = props;
  const navigation = useNavigation();
  const [hide, setHide] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState('');
  const [selectedOption, setSelectedOption] = useState('Store Owner');
  const [payload, setPayload] = React.useState({
    email: '',
    name: '',
    phoneNumber: '',
    password: '',
  });
  function showAlert(msg) {
    setError(msg);
    setShowError(true);
  }

  return (
    <View style={{...styles.container}}>
      <View style={{paddingHorizontal: mvs(46), marginTop: mvs(30)}}>
        <Image source={require('../../../assets/images/logo.png')} style={{alignSelf: 'center'}} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          <View style={{paddingTop: mvs(25)}}>
            <PrimaryInput
              value={payload.email}
              placeHolder="Email"
              bWidth={1}
              onChange={val => setPayload({...payload, email: val})}
            />
            <PrimaryInput
              value={payload.name}
              placeHolder="Name"
              bWidth={1}
              onChange={val => setPayload({...payload, name: val})}
            />
              <PrimaryInput
              value={payload.phoneNumber}
              placeHolder="Phone Number"
              bWidth={1}
              onChange={val => setPayload({...payload, phoneNumber: val})}
            />
            <PrimaryInput
              value={payload.password}
              placeHolder="Password"
              rightIcon={hide ? 'Close' : 'Eye'}
              isPassword={hide}
              onRightIconClick={() => setHide(!hide)}
              onChange={val => setPayload({...payload, password: val})}
            />
            <PrimaryButton
              fontSize={18}
              title="Step  1/4"
              style={{marginTop: mvs(25)}}
              onClick={() => navigation.navigate('SignupTwo')}
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

export default SignupOne;
