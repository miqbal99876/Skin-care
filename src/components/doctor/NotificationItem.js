import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {mvs} from '../../services/metrices';
import Row from '../atoms/row';
import Bold from '../../presentation/typography/bold-text';
import colors from '../../services/colors';
import {Notification2} from '../../assets/svgs';
const NotificationItem = ({
  title = 'Work',
  description = 'dush dush',
  onclick,
}) => {
  return (
    <TouchableOpacity onPress={onclick}>
      <Row style={styles.row}>
        <Notification2 />
        <View style={{marginHorizontal: mvs(20), width: mvs(280)}}>
          <Bold label={title} size={mvs(16)} color={colors.lightgrey1} />
          <Bold
            label={description}
            style={{marginVertical: mvs(10)}}
            size={mvs(12)}
            numberOfLines={4}
            color={colors.lightgrey1}
          />
        </View>
      </Row>
    </TouchableOpacity>
  );
};
export default NotificationItem;
const styles = StyleSheet.create({
  row: {
    justifyContent: 'flex-start',
    marginVertical: mvs(10),
    borderBottomWidth: 1,
    width: mvs(340),
    borderBottomColor: 'silver',
  },
});
