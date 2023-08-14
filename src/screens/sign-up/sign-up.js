import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { Camera, Map } from '../../assets/svgs';
import Row from '../../components/atoms/row';
import PrimaryButton from '../../components/buttons/button-primary';
import AppHeader from '../../components/header/app-header';
import PrimaryInput from '../../components/input/primary-input';
import ProfileCard from '../../components/profile-card/primary-input';
import Regular from '../../presentation/typography/regular-text';
import { mvs } from '../../services/metrices';
import { ACTIONS } from '../../store/actions';
import styles from './sign-up.styles';
import SERVICES from '../../services/common-services';
import SearchLocation from '../../components/restaurant/search-location/search-location';
import PrimaryModal from '../../components/modals/primary-modal';
import Bold from '../../presentation/typography/bold-text';
import DualText from '../../components/atoms/dual-text/dual-text';
import colors from '../../services/colors';

// create a component
const SignUp = props => {
  const { setUser } = props;
  const navigation = useNavigation();
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const [showCalender, setShowCalender] = useState(false);
  const [showMomo, setShowMomo] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [hide, setHide] = useState(true);

  const [payload, setPayload] = React.useState({
    StoreName: '',
    StoreAddress: '',
    VatTax: '',
    MinimumDeliver: '',
    MaximumDeliver: '',
    Minute: '',
    Search: '',
    Latitude: '',
    Longitude: '',
    Location: '',
    FirstName: '',
    LastName: '',
    Phone: '',
    Email: '',
    Password: '',
    ConfirmPassword: '',
    Logo: {},
    Cover: {},
  });

  const [showError, setShowError] = useState(false);
  const [error, setError] = useState('');
  const [icon] = useState('Alert');

  function showAlert(msg) {
    setError(msg);
    setShowError(true);
  }

  const pickImage = async side => {
    const image = await SERVICES._returnImageGallery();
    if (image == undefined) {
      return;
    }
    setPayload({ ...payload, Logo: image });
  };
  const pickCover = async side => {
    const image = await SERVICES._returnImageGallery();
    if (image == undefined) {
      return;
    }
    setPayload({ ...payload, Cover: image });
  };

  const validate = email => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return reg.test(email);
  };
  const validate_password = password => {
    const reg =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;
    return reg.test(password);
  };

  const submit = async () => {
    if (!validate(payload.Email)) {
      showAlert('Please enter valide email');
      return;
    }
    if (payload.StoreName.length < 1) {
      showAlert('Please enter store name');
      return;
    }
    if (payload.StoreAddress.length < 1) {
      showAlert('Please enter store Adress');
      return;
    }
    if (!payload.Logo?.uri) {
      showAlert('Please select logo');
      return;
    }
    if (!payload.Cover?.uri) {
      showAlert('Please select Cover');
      return;
    }
    if (desc == '') {
      showAlert('Please select location');
      return;
    }
    if (payload.FirstName.length < 1) {
      showAlert('Please enter first name');
      return;
    }
    if (payload.LastName.length < 1) {
      showAlert('Please enter last name');
      return;
    }
    if (payload.Phone.length < 1) {
      showAlert('Please enter valid phone number');
      return;
    }
    if (!validate_password(payload.Password)) {
      showAlert('Please enter password');
      return;
    }
    if (payload.Password !== payload.ConfirmPassword) {
      showAlert('Confirm password did not match');
      return;
    }
    navigation.navigate('Drawer');
  };

  return (
    <View style={{ ...styles.container }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          <Bold label={'Create an Account!_'} size={mvs(mvs(25))} />
          <View style={{ marginTop: mvs(120) }}>
            <PrimaryInput
              value={payload.FirstName}
              placeHolder="Name"
              bWidth={1}
              onChange={val => setPayload({ ...payload, FirstName: val })}
              style={{ elevation: 10, marginBottom: mvs(10) }}
            />
            <PrimaryInput
              value={payload.Emaill}
              placeHolder="Email"
              bWidth={1}
              onChange={val => setPayload({ ...payload, Email: val })}
              style={{ elevation: 10, marginBottom: mvs(10) }}
            />
            <PrimaryInput
              value={payload.password}
              placeHolder="Password"
              rightIcon={hide ? 'Close' : 'Eye'}
              isPassword={hide}
              onRightIconClick={() => setHide(!hide)}
              onChange={val => setPayload({ ...payload, password: val })}
              style={{ elevation: 10, marginBottom: mvs(10) }}
            />
          </View>
          <PrimaryModal
            title="Register Account"
            description={error}
            visible={showError}
            buttonTitle="OK"
            icon="Alert"
            onOk={() => setShowError(false)}
          />
          <PrimaryButton
            fontSize={18}
            title="Sign Up"
            style={{ marginTop: mvs(18) }}
            onClick={() => navigation.navigate('DrawerNavigator')}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <DualText
              content="Or Create Account? "
              style={{ fontSize: mvs(16), color: colors.black, alignSelf: 'center', marginTop: mvs(20) }}
              highlightText={'Login'}
              highlightTextStyle={{ fontSize: mvs(18), color: colors.primary }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>

    </View>
  );
};

const mapStateToProps = store => ({});

const mapDispatchToProps = {
  setUser: info => ACTIONS.setUserInfo(info),
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
