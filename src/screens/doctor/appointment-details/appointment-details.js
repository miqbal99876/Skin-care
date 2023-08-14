//import liraries
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {connect} from 'react-redux';
import ImagePlaceholder from '../../../components/atoms/Placeholder';
import Row from '../../../components/atoms/row';
import PrimaryButton from '../../../components/buttons/button-primary';
import AppHeader from '../../../components/header/app-header';
import Bold from '../../../presentation/typography/bold-text';
import colors from '../../../services/colors';
import {mvs} from '../../../services/metrices';
import DIVIY_API from '../../../store/api-calls';
import styles from './style';
import {Tick} from '../../../assets/svgs';
import Regular from '../../../presentation/typography/regular-text';
import {
  HomeVisit,
  MaleIcon,
  Message,
  VideoCall,
  VoiceCall,
  UnSelectedHomeVisit,
  UnSelectedMessage,
  UnSelectedVideoCall,
  UnSelectedVoiceCall,
} from '../../../assets/doctor';
import alertService from '../../../services/alert.service';
import PrimaryModal from '../../../components/modals/primary-modal';
import FeeInfo from '../../../components/doctor/fee-info';
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
// create a component
const AppointmentDetails = props => {
  const {route, get_appoinment, appointment} = props;
  const {id} = 1; //route?.params;
  const navigation = useNavigation();
  const [isFetched, setFetched] = useState(false);
  const [isAccepted, setAccepted] = useState(false);
  useEffect(() => {
    //getData();
  }, []);
  const getData = async () => {
    await get_appoinment(id);
    setFetched(true);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.mappath} barStyle="light-content" />
      <AppHeader title="" rightIcon="" />

      <View style={styles.body}>
        <Row alignItems="center">
          <ImagePlaceholder containerStyle={styles.image} />
          <View style={{flex: 1, paddingLeft: mvs(10)}}>
            <Bold
              label={`Kamran Khan`}
              color={colors.lightgrey1}
              size={mvs(24)}></Bold>
            <Row alignItems="center">
              <Tick />
              <Regular
                label={'House Visit'}
                color={colors.mappath}
                size={mvs(15)}
                style={{flex: 1, marginLeft: mvs(10)}}
              />
            </Row>
            <Row alignItems="center">
              <Tick />
              <Regular
                label={'3 Days Symtoms'}
                color={colors.mappath}
                size={mvs(15)}
                style={{flex: 1, marginLeft: mvs(10)}}
              />
            </Row>
          </View>
        </Row>
        <LinearGradient
          start={{x: 0.1, y: 0}}
          end={{x: 0.9, y: 0.2}}
          colors={colors.primaryLinear}
          style={styles.gradient}>
          <Row alignItems="center" style={{paddingHorizontal: mvs(10)}}>
            <Row alignItems="center">
              <MaleIcon />
              <View style={{marginLeft: mvs(5)}}>
                <Bold label={'Male'} color={colors.white} size={mvs(20)} />
                <Bold label={'30+'} color={colors.white} size={mvs(17)} />
              </View>
            </Row>

            <View style={{marginLeft: mvs(5), paddingRight: mvs(10)}}>
              <Bold
                label={'Jun 14 10:30 AM'}
                color={colors.white}
                size={mvs(18)}
              />
              <Bold
                label={'Appointment time'}
                color={colors.white}
                size={mvs(14)}
              />
            </View>
          </Row>
          <View style={styles.LowerWhite}>
            <Regular
              label={'Symptoms'}
              size={mvs(18)}
              color={colors.lightgrey1}
            />
            <Regular
              label={
                'I am a Cardio Patinet. Feel sick last 2 weeks. I need to talk about cardio problem.'
              }
              numberOfLines={4}
              size={mvs(14)}
            />
            <Regular
              label={'Drug Allergies'}
              size={mvs(18)}
              color={colors.lightgrey1}
              style={{marginTop: mvs(30)}}
            />
            <Regular label={'None'} numberOfLines={4} size={mvs(14)} />

            <Regular
              label={'Location'}
              size={mvs(18)}
              color={colors.lightgrey1}
              style={{marginTop: mvs(30)}}
            />
            <Regular
              label={'23 Mobolo Street, Off Accra Central'}
              numberOfLines={4}
              size={mvs(14)}
            />
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <FeeInfo
                title="House Visit"
                description="Doctor comes to your location"
                amount="₵100"
              />
              {isAccepted == true ? (
                <Row alignItems="center">
                  <UnSelectedVoiceCall />
                  <UnSelectedMessage />
                  <UnSelectedVideoCall />
                  <HomeVisit />
                </Row>
              ) : (
                <PrimaryButton
                  title="Accept Request"
                  color={colors.greyLinear}
                  onClick={() => setAccepted(true)}
                />
              )}
            </View>
          </View>
        </LinearGradient>
        <PrimaryModal
          visible={isAccepted}
          title={'Completed'}
          buttonTitle="Contact Patient"
          onOk={() => {
            setAccepted(false);
            navigation.navigate('DoctorHome');
          }}
          description={`You have accepted nenes request. please contact patient as soon aspossible`}
          icon="Accepted"
        />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = store => ({
  appointment: store.state.appointment,
  user_info: store.state.user_info,
});

const mapDispatchToProps = {
  get_appoinment: id => DIVIY_API.get_appoinment(id),
};
export default connect(mapStateToProps, mapDispatchToProps)(AppointmentDetails);
