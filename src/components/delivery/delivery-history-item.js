import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {mvs} from '../../services/metrices';
import colors from '../../services/colors';
import Row from '../atoms/row';
import ImagePlaceholder from '../atoms/Placeholder';
import Regular from '../../presentation/typography/regular-text';
import {LocationPath} from '../../assets/svgs';
import SemiBold from '../../presentation/typography/semibold-text';
import Bold from '../../presentation/typography/bold-text';
import {URLS} from '../../store/api-urls';
import ImageView from '../molecules/image/image-view';
import moment from 'moment';
const HistoryItem = ({parcel = {}}) => {
  return (
    <View style={styles.container}>
      <Row style={{alignItems: 'center'}}>
        <ImagePlaceholder
          uri={{uri: `${URLS.image_url}${parcel?.customer?.image}`}}
          containerStyle={styles.imageStyle}
        />
        <View style={{flex: 1, marginLeft: mvs(10)}}>
          <Bold
            label={parcel?.customer?.name}
            size={mvs(14)}
            color={colors.black}
          />
          <Regular
            label={moment(parcel?.createdAt)?.format('MMM Do YY')}
            size={mvs(12)}
            color={colors.mappath}
          />
        </View>
        <SemiBold
          label={'Fare ₵' + parcel?.totalAmount}
          size={14}
          color={colors.black}
          style={{}}
        />
      </Row>
      {parcel?.image && (
        <ImageView uri={parcel?.image} style={{marginTop: mvs(9)}} />
      )}
      <Row style={{flex: 1, marginTop: mvs(14)}}>
        <LocationPath />
        <View style={styles.locationView}>
          <Regular
            label={parcel?.pickup}
            style={{width: '75%'}}
            size={14}
            color={colors.black}
          />
          <Row style={{alignItems: 'center'}}>
            <Regular
              label={parcel?.dropOff}
              style={{width: '75%'}}
              size={14}
              color={colors.black}
            />
            <TouchableOpacity>
              <SemiBold
                label={parcel?.distance + 'km'}
                size={13}
                color={colors.black}
              />
            </TouchableOpacity>
          </Row>
        </View>
      </Row>
      <View style={styles.commissionView}>
        <Row alignItems="center">
          <Bold
            label={'Dispatch Commission'}
            size={mvs(14)}
            color={colors.white}
          />
          <Regular
            label={'₵' + parcel?.totalCommission?.toFixed(2)}
            color={colors.white}
            size={mvs(14)}
          />
        </Row>
        <Row alignItems="center">
          <Bold label={'Payment Method'} size={mvs(14)} color={colors.white} />
          <Regular
            label={parcel?.paymentMethod}
            color={colors.white}
            size={mvs(14)}
          />
        </Row>
      </View>
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
  imageStyle: {
    height: mvs(50),
    width: mvs(50),
    borderRadius: mvs(1000),
  },
  button: {
    height: mvs(44),
    width: mvs(44),
    borderRadius: mvs(1000),
    marginHorizontal: mvs(5),
  },
  locationView: {
    flex: 1,
    paddingLeft: mvs(15),
    justifyContent: 'space-between',
    height: '100%',
  },
  commissionView: {
    marginTop: mvs(10),
    paddingHorizontal: mvs(15),
    backgroundColor: colors.primary,
    borderRadius: mvs(16),
    paddingVertical: mvs(10),
  },
});
export default HistoryItem;
