//import liraries
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {connect} from 'react-redux';
import NotificationItem from '../../../components/doctor/NotificationItem';
import AppHeader from '../../../components/header/app-header';
import Regular from '../../../presentation/typography/regular-text';
import colors from '../../../services/colors';
import {mvs} from '../../../services/metrices';
import DIVIY_API from '../../../store/api-calls';
import styles from './style';
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
// create a component
const Notification = props => {
  const {vendors, getVendors, getProducts, recommended, searchVendors, route} =
    props;
  const navigation = useNavigation();
  const [isFetched, setFetched] = useState(false);
  useEffect(() => {
    //getData();
  }, []);
  const getData = async () => {
    await getVendors('Pharmacy');
    await getProducts('&ShopType=Pharmacy');
    setFetched(true);
  };
  const searchVendorsByName = async name => {
    await searchVendors(name, 'Pharmacy');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.mappath} barStyle="light-content" />
      <AppHeader
        leftIcon={route?.params?.back ? 'Back' : ''}
        title="Notification"
        rightIcon=""
      />
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          <Regular
            label="Today  -  10 June, 2020"
            size={mvs(14)}
            color={colors.lightgrey1}
            style={styles.date}
          />
          <NotificationItem
            title="Serial reminder"
            description="Your serial is successfully added in appointment list. Serial number is 25. DoctorPoint will notice you before 15 minutes."
          />
          <NotificationItem
            title="Appointment alarm"
            description="Your appointment will be start after 15 minutes. Stay with app and take care."
          />
          <NotificationItem
            title="Appointment confirmed"
            description="Your Appointment with Dr. Mahmud Nik is confirmed. He will call you at 11:00 AM | 10 June, 2020"
          />
          <Regular
            label="11 June, 2020"
            size={mvs(14)}
            color={colors.lightgrey1}
            style={styles.date}
          />
          <NotificationItem
            title="Serial reminder"
            description="Your serial is successfully added in appointment list. Serial number is 25. DoctorPoint will notice you before 15 minutes."
          />
          <NotificationItem
            title="Appointment alarm"
            description="Your appointment will be start after 15 minutes. Stay with app and take care."
          />
          <NotificationItem
            title="Serial reminder"
            description="Your serial is successfully added in appointment list. Serial number is 25. DoctorPoint will notice you before 15 minutes."
          />
          <NotificationItem
            title="Appointment alarm"
            description="Your appointment will be start after 15 minutes. Stay with app and take care."
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = store => ({
  vendors: store.state.pharmacies,
  recommended: store.state.recommended_products,
  user_info: store.state.user_info,
  card_data: store.state.cart,
});

const mapDispatchToProps = {
  getVendors: type => DIVIY_API.get_vendors(type),
  getProducts: params => DIVIY_API.get_recommended_products(params),
  searchVendors: (name, type) => DIVIY_API.search_vendors(name, type),
};
export default connect(mapStateToProps, mapDispatchToProps)(Notification);
