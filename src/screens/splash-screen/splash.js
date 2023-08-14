import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { ImageBackground, View } from 'react-native';
import { connect } from 'react-redux';
import { ACTIONS } from '../../store/actions';
import { Splash_Styles as styles } from './splash-styles';
import colors from '../../services/colors';
import LinearGradient from 'react-native-linear-gradient';
import { Bg } from '../../assets/images';
import { ActiveBody, Logo } from '../../assets/svgs';
import DIVIY_API from '../../store/api-calls';

const Splash = props => {
  const {
    setUserInfo,
    navigation,
    get_current_location,
    get_cedi_value,
    setCediValue,
  } = props;
  dnavigation = navigation;
  React.useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem('@token');
      const user = await AsyncStorage.getItem('@user');
      setTimeout(() => {
        if (!token || !user) {
          navigation.replace('Signin');
        } else {
          setUserInfo(JSON.parse(user));
          navigation.replace('DrawerNavigator');
        }
      }, 3000);
    })();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Logo />
    </View>




  );
};

const mapStateToProps = store => ({
  user_info: store.state.user_info,
});

export default Splash;
