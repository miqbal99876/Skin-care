import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, ScrollView, View} from 'react-native';
import PrimaryButton from '../../../components/buttons/button-primary';
import PrimaryInput from '../../../components/input/primary-input';
import PrimaryModal from '../../../components/modals/primary-modal';
import Regular from '../../../presentation/typography/regular-text';
import colors from '../../../services/colors';
import {mvs} from '../../../services/metrices';
import {Signup_Styles as styles} from './signup-two.style';
import DoctorInput from '../../../components/input/doctor-input';
const SignupTwo = props => {
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
        <Image
          source={require('../../../assets/images/logo.png')}
          style={{alignSelf: 'center'}}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          <View style={{paddingTop: mvs(25)}}>
            <Regular label={'Area of Specialization'} />
            <DoctorInput placeHolder="Cardiology" rightIcon="Down" />

            <Regular label={'Years of Experience'} style={{marginTop: 10}} />
            <DoctorInput placeHolder="5 Years" />

            <Regular label={'Current Practice'} style={{marginTop: 10}} />
            <DoctorInput placeHolder="Dhaka medical Hospital" />

            <Regular label={'Available for'} style={{marginTop: 10}} />
            <DoctorInput
            rightIcon='Down'
              placeHolder="House Visits Messaging Calls"
            />
        
            <PrimaryButton
              fontSize={18}
              title="Step  2/4"
              style={{marginTop: mvs(25)}}
              onClick={() => navigation.navigate('SignupThree')}
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

export default SignupTwo;
