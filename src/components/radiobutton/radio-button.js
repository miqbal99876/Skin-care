import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import the icon library of your choice
import colors from '../../services/colors';

const RadioButton = ({label, checked, onPress}) => {
  const handlePress = () => {
    onPress(!checked);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Ionicons
        name={checked ? 'radio-button-on' : 'radio-button-off'}
        size={24}
        color={checked ? colors.primary : colors.gray2}
      />
      <Text
        style={[
          styles.label,
          {color: checked ? colors.primary : colors.gray2},
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
  },
});

export default RadioButton;
