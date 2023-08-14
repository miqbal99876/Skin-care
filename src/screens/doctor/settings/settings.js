//import liraries
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {EditProfile} from '../../../assets/doctor';
import Row from '../../../components/atoms/row';
import ProfileItem from '../../../components/profile-item/profile-item';
import Bold from '../../../presentation/typography/bold-text';
import Regular from '../../../presentation/typography/regular-text';
import colors from '../../../services/colors';
import {mvs} from '../../../services/metrices';
import {URLS} from '../../../store/api-urls';
import styles from './style';
import ImagePlaceholder from '../../../components/atoms/Placeholder';
// create a component
const Settings = props => {
  const navigation = useNavigation();
  const {user_info} = props;
  const settings = [
    {
      id: 1,
      title: 'History',
      icon: 'Appointments',
      action: 'MyAppointments',
    },
    {
      id: 2,
      title: 'Notifications',
      icon: 'SelectedNotification',
      action: 'DoctorNotification',
    },
    {id: 3, title: 'Help', icon: 'Help', action: ''},
    {id: 4, title: 'About', icon: 'About', action: ''},
  ];
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.mappath} barStyle="light-content" />
      <Row alignItems="center" style={{paddingTop: mvs(20)}}>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Bold label={'Settings'} size={mvs(24)} color={colors.lightgrey2} />
        </View>
        <TouchableOpacity
          style={{marginHorizontal: mvs(15)}}
          onPress={() => navigation.navigate('UserProfile')}>
          <EditProfile />
        </TouchableOpacity>
      </Row>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          <LinearGradient
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
            colors={colors.primaryLinear}
            borderRadius
            style={styles.gradient}>
            <Row alignItems="center">
              {/* <Image
                source={{uri: `${URLS.image_url}${user_info?.image}`}}
                style={styles.profile}
              /> */}
              <ImagePlaceholder containerStyle={styles.profile} />
              <View style={{flex: 1, paddingHorizontal: mvs(10)}}>
                <Bold label={'Hello!'} color={colors.white} size={mvs(20)} />
                <Bold
                  label={user_info?.fullName || 'Kamran Khan'}
                  color={colors.white}
                  size={mvs(20)}
                  style={{marginTop: mvs(2)}}
                />
                <Regular
                  label={user_info?.phone || '034323232'}
                  color={colors.white}
                  style={{marginTop: mvs(2)}}
                />
              </View>
            </Row>
          </LinearGradient>
          {settings.map((item, index) => (
            <ProfileItem
              onClick={() => {
                if (item?.action.length > 0) {
                  navigation.navigate(item?.action);
                }
              }}
              key={index}
              borderWidth={0}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = store => ({
  user_info: store.state.user_info,
});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
