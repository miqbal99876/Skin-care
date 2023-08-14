import React from 'react';
import { Text, View } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell
} from 'react-native-confirmation-code-field';
import { mvs } from '../../../services/metrices';
import { OPTINPUT_STYLES as styles } from './otp-input-styles';
import colors from './../../../services/colors';


const CELL_COUNT = 6;

export const OtpInput = ({value,setValue,isMatch=false}) => {
  // const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <CodeField
    ref={ref}
    {...props}
    value={value}
    onChangeText={txt => {
      setValue(txt)
        // propsParent.code(txt)
    }}
    cellCount={CELL_COUNT}
    rootStyle={styles.codeFieldRoot}
    keyboardType="number-pad"
    textContentType="oneTimeCode"
    renderCell={({index, symbol, isFocused}) => (
      <View
        onLayout={getCellOnLayoutHandler(index)}
        key={index}
        style={[styles.cellRoot, isFocused && styles.focusCell,{borderColor:!isFocused?colors.white:colors.primary}]}>
        <Text style={styles.cellText}>
          {symbol || (isFocused ? <Cursor /> : null)}
        </Text>
      </View>
    )}
  />
  );
};
