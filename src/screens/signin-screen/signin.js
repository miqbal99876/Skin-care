import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import DualText from '../../components/atoms/dual-text/dual-text';
import PrimaryButton from '../../components/buttons/button-primary';
import PrimaryInput from '../../components/input/primary-input';
import PrimaryModal from '../../components/modals/primary-modal';
import Bold from '../../presentation/typography/bold-text';
import colors from '../../services/colors';
import { mvs } from '../../services/metrices';
import DIVIY_API from '../../store/api-calls';
import { Signin_Styles as styles } from './signin-styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Signin = props => {
  const { signin } = props;
  const navigation = useNavigation();
  const [hide, setHide] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState('');
  const [selectedOption, setSelectedOption] = useState('Store Owner');
  const [payload, setPayload] = React.useState({
    email: '',
    password: '',
  });
  function showAlert(msg) {
    setError(msg);
    setShowError(true);
  }

  return (
    <View style={{ ...styles.container }}>

      <View style={{ paddingTop: mvs(50) }}>
        <Bold label={'Login_'} size={mvs(30)} />
        <View style={{ marginTop: mvs(120) }}>
          <PrimaryInput
            value={payload.email}
            placeHolder="Email"
            bWidth={1}
            onChange={val => setPayload({ ...payload, email: val })}
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
          <PrimaryButton
            fontSize={18}
            title="Log In"
            style={{ marginTop: mvs(18) }}
            onClick={() => navigation.navigate('TabNavigator')}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <DualText
              content="Or Create Account? "
              style={{ fontSize: mvs(16), color: colors.black, alignSelf: 'center', marginTop: mvs(20) }}
              highlightText={'Signup'}
              highlightTextStyle={{ fontSize: mvs(18), color: colors.primary }}
            />
          </TouchableOpacity>

        </View>
      </View>
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

const mapStateToProps = store => ({
  // home_posts: store.state.home_posts,
});

const mapDispatchToProps = {
  signin: payload => DIVIY_API.signin(payload),
};
export default connect(mapStateToProps, mapDispatchToProps)(Signin);
