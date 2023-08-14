import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Bold from '../../presentation/typography/bold-text';
import Regular from '../../presentation/typography/regular-text';
import {mvs} from '../../services/metrices';
import Row from '../atoms/row';
import colors from '../../services/colors';
import LinearGradient from 'react-native-linear-gradient';
const FeeInfo = ({title = '', description = '', amount = ''}) => {
  return (
    <LinearGradient colors={colors.primaryLinear} style={styles.main}>
      <Row alignItems="center" justifyContent="space-between">
        <View style={{flex: 1, paddingHorizontal: mvs(10)}}>
          <Row alignItems="center">
            <Bold label={title} size={mvs(18)} color={colors.white} />
          </Row>
          <Regular label={description} size={mvs(12)} color={colors.white} />
        </View>
        <Bold
          label={amount}
          size={mvs(20)}
          style={{paddingRight: mvs(20)}}
          color={colors.white}
        />
      </Row>
    </LinearGradient>
  );
};
export default FeeInfo;
const styles = StyleSheet.create({
  main: {
    height: mvs(70),
    backgroundColor: colors.white,
    marginVertical: mvs(10),
    borderRadius: mvs(10),
    elevation: 5,
    justifyContent: 'center',
  },
});
