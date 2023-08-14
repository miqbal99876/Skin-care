import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {mvs} from '../../../services/metrices';
import colors from '../../../services/colors';
import {URLS} from '../../../store/api-urls';
const ImageView = ({onPress, style, uri}) => {
  console.log('Image uri is ==>', uri);
  return (
    <View style={{...styles.container, ...style}}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image
          source={{uri: `${URLS.image_url}${uri}`}}
          style={styles.imageStyle}
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: mvs(7),
    borderRadius: mvs(15),
    marginTop: mvs(20),
    ...colors.shadow,
    backgroundColor: colors.white,
  },
  button: {
    borderWidth: 1,
    borderColor: colors.lightgrey1,
    borderStyle: 'dashed',
    borderRadius: mvs(15),
    height: mvs(157),
    justifyContent: 'center',
    alignItems: 'center',
    padding: mvs(5),
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    borderRadius: mvs(15),
  },
});
export default ImageView;
