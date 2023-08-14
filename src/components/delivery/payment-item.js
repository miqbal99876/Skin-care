import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {mvs} from '../../services/metrices';
import colors from '../../services/colors';
import Row from '../atoms/row';
import ImagePlaceholder from '../atoms/Placeholder';
import Regular from '../../presentation/typography/regular-text';
import {Down, LocationPath, Up} from '../../assets/svgs';
import SemiBold from '../../presentation/typography/semibold-text';
import Bold from '../../presentation/typography/bold-text';
import {URLS} from '../../store/api-urls';
import moment from 'moment';
const PaymentItem = ({item = {}, onPay}) => {
  const isClear = item?.isClearedByClient == 1 && item?.isClearedByCompany == 1;
  return (
    <View style={styles.container}>
      <Row alignItems="center">
        <Bold
          label={moment(item?.commissionDate)?.format('yyyy-MM-DD')}
          size={mvs(14)}
          color={colors.primary}
        />
        {item?.riderCommission > item?.companyCommission ? <Up /> : <Down />}
      </Row>
      <Row alignItems="center" style={{marginTop: mvs(5)}}>
        <Bold label={'My Commission'} size={mvs(12)} color={colors.black} />
        <Bold
          label={'₵' + item?.riderCommission?.toFixed(2)}
          size={mvs(11)}
          color={colors.primary}
        />
      </Row>
      <Row alignItems="center" style={{marginTop: mvs(5)}}>
        <Bold
          label={'Dispatch Commission'}
          size={mvs(12)}
          color={colors.black}
        />
        <Bold
          label={'₵' + item?.companyCommission?.toFixed(2)}
          size={mvs(11)}
          color={colors.primary}
        />
      </Row>
      <Row alignItems="center" style={{marginTop: mvs(5)}}>
        <Bold label={'Total Earnings'} size={mvs(12)} color={colors.black} />
        <Bold
          label={'₵' + item?.totalAmount?.toFixed(2)}
          size={mvs(11)}
          color={colors.primary}
        />
      </Row>
      {item?.riderCommission > item?.companyCommission ? (
        <Row style={styles.commissionView} alignItems="center">
          <View style={styles.button}>
            <Bold
              label={isClear ? 'Paid by Dispatch' : 'Pending by Dispatch'}
              size={mvs(12)}
              color={colors.white}
            />
          </View>

          <Regular
            label={
              '₵' + (item?.riderCommission - item?.companyCommission).toFixed(2)
            }
            color={colors.white}
            size={mvs(12)}
          />
        </Row>
      ) : (
        <Row style={styles.commissionView} alignItems="center">
          <TouchableOpacity
            activeOpacity={isClear ? 1 : 0}
            style={styles.button}
            onPress={!isClear && onPay}>
            <Bold
              label={isClear ? 'Paid to Dispatch' : 'Pay Commission'}
              size={mvs(12)}
              color={colors.white}
            />
          </TouchableOpacity>
          <Regular
            label={
              '₵' + (item?.companyCommission - item?.riderCommission).toFixed(2)
            }
            color={colors.white}
            size={mvs(12)}
          />
        </Row>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: mvs(15),
    paddingHorizontal: mvs(15),
    paddingVertical: mvs(13),
    backgroundColor: colors.white,
    ...colors.shadow,
    marginTop: mvs(10),
  },
  commissionView: {
    marginTop: mvs(10),
    paddingHorizontal: mvs(15),
    backgroundColor: colors.primary,
    borderRadius: mvs(10),
    paddingVertical: mvs(5),
    paddingLeft: mvs(5),
  },
  button: {
    borderWidth: mvs(0.5),
    borderColor: colors.white,
    padding: mvs(7),
    borderRadius: mvs(10),
  },
});
export default PaymentItem;
