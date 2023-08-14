import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import PrimaryButton from '../../../components/buttons/button-primary';
import PrimaryInput from '../../../components/input/primary-input';
import PrimaryModal from '../../../components/modals/primary-modal';
import Regular from '../../../presentation/typography/regular-text';
import colors from '../../../services/colors';
import {mvs} from '../../../services/metrices';
import {Signup_Styles as styles} from './signup-four.style';
import DoctorInput from '../../../components/input/doctor-input';
import ProfileCard from '../../../components/profile-card/primary-input';
import {DeleteFile, File, FileIcon} from '../../../assets/svgs';
import Row from '../../../components/atoms/row';
import PrimaryRadioButton from '../../../components/radio-button/radio-button';
import Icon from 'react-native-vector-icons/Feather';
const SignupFour = props => {
  const {signin} = props;
  const navigation = useNavigation();
  const [hide, setHide] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState('');
  const [selectedOption, setSelectedOption] = useState('Store Owner');
  const [checked, setChecked] = useState(false);
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
          <View>
            <Regular
              label={'Upload Verification Documents'}
              style={{marginTop: mvs(51), alignSelf: 'center'}}
              color={colors.black}
            />

            <Row alignItems="center" style={styles.file}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <File />
                <View style={{marginLeft: 10}}>
                  <Regular label={'Passport Photo'} />
                  <Regular label={'1 File'} />
                </View>
              </View>
              <FileIcon />
            </Row>
            <Row alignItems="center" style={styles.file}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <File />
                <View style={{marginLeft: 10}}>
                  <Regular label={'Medical License'} />
                  <Regular label={'3 File'} />
                </View>
              </View>
              <DeleteFile />
            </Row>

            <View style={styles.check}>
              <TouchableOpacity
                onPress={() => setChecked(!checked)}
                style={styles.checkbox}>
                {checked ? (
                  <Icon name="check-square" size={24} color={colors.primary} />
                ) : (
                  <Icon name="square" size={24} color={colors.gray2} />
                )}
              </TouchableOpacity>
              <Text style={styles.label}>
                I acceept that my information provided is true and not false and
                i am a licensed practitoner in the medical field
              </Text>
            </View>

            <PrimaryButton
              fontSize={18}
              title="Step  4/4"
              style={{marginTop: mvs(25)}}
              onClick={() => navigation.navigate('DoctorHome')}
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

export default SignupFour;
