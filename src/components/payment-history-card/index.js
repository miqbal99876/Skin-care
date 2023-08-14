//import liraries
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Folder, VerticalLine} from '../../assets/svgs';
import Bold from '../../presentation/typography/bold-text';
import colors from '../../services/colors';
import {mvs} from '../../services/metrices';
import Row from '../atoms/row';
import LinearGradient from 'react-native-linear-gradient';
// create a component
const PaymentHistoryCard = () => {
  return (
    <LinearGradient style={styles.card} colors={colors.primaryLinear}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Row style={{margin: 15}}>
          <Folder />
          <View style={{marginLeft: 15}}>
            <Bold label={'Today'} color={colors.white} />
            <Bold label={'$ 0.00'} color={colors.white} />
          </View>
        </Row>
      </View>
      <Row style={{paddingHorizontal: mvs(50)}}>
        <View style={{marginLeft: 15}}>
          <Bold label={'This Week'} color={colors.white} />
          <Bold
            label={'$ 0.00'}
            color={colors.white}
            style={{alignSelf: 'center'}}
          />
        </View>
        <VerticalLine />
        <View style={{marginLeft: 15}}>
          <Bold label={'This Month'} color={colors.white} />
          <Bold
            label={'$ 0.00'}
            color={colors.white}
            style={{alignSelf: 'center'}}
          />
        </View>
      </Row>
    </LinearGradient>
  );
};

// define your styles
const styles = StyleSheet.create({
  card: {
    height: mvs(141),
    backgroundColor: colors.primary,
    marginTop: mvs(10),
    borderRadius: 10,
    marginBottom: mvs(23),
  },
});

//make this component available to the app
export default PaymentHistoryCard;
