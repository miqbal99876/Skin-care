import { Picker } from '@react-native-picker/picker';
import { useTheme } from '@react-navigation/native';
import React, {  useState } from 'react';
import { View,StyleSheet, TouchableOpacity } from 'react-native';
import { mvs } from '../../services/metrices';
import colors from '../../services/colors';
import { RadioButtonSelected,RadioButton } from '../../assets/svgs';
import Medium from '../../presentation/typography/medium-text';
const PrimaryRadioButton = ({title='',style,isSelected=false,onChange}) => {
    
    return (
        <View style={{...styles.container,borderWidth:isSelected?1:0,...style}}>
              <Medium label={title} size={15} color={colors.black} style={{flex:1,paddingHorizontal:mvs(5)}}/>
              {
                isSelected?
                <TouchableOpacity onPress={onChange}>
                     <RadioButtonSelected/>
                </TouchableOpacity>
                
                :
                <TouchableOpacity onPress={onChange}>
                   <RadioButton/>
                </TouchableOpacity>
              }
        </View>
      
    );
}
const styles = StyleSheet.create({
    container:{
       flexDirection:'row',
       alignItems:'center',
       height:mvs(73),
       borderRadius:mvs(15),
       marginTop:mvs(10),
       paddingHorizontal:mvs(20),
       paddingVertical:mvs(25),
       borderColor:colors.primary,
       backgroundColor:colors.white,
       ...colors.shadow
    },
    textStyle:{
        marginLeft:mvs(18),
        color:colors.white
    }
});
export default PrimaryRadioButton;