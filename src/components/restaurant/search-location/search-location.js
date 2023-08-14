import React from 'react';
import {StyleSheet, View} from 'react-native';
import {mvs} from '../../../services/metrices';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {MapKey} from '../../../store/api-urls';
import colors from '../../../services/colors';
import Bold from '../../../presentation/typography/bold-text';
import Regular from '../../../presentation/typography/regular-text';
import {Search} from '../../../assets/svgs';
const SearchLocation = ({
  onAddressClick = (arg1, arg2) => {},
  inputStyle,
  handleSearchFocus,
  handleSearchTextChange,
  searchText = '',
}) => {
  const PlaceRow = ({item}) => {
    return (
      <View style={styles.row}>
        <Bold label={item?.structured_formatting?.main_text} />
        <Regular label={item?.structured_formatting?.secondary_text} />
      </View>
    );
  };
  return (
    <View style= {{flex: 1,paddingHorizontal:mvs(16)}}>
      <GooglePlacesAutocomplete
        GooglePlacesDetailsQuery={{fields: 'geometry'}}
        fetchDetails={true} // you need this to fetch the details object onPress
        placeholder="Enter Location"
        onPress={(data, details = null) => {
          onAddressClick(data, details);
         
        }}
        textInputProps={{
          onFocus: handleSearchFocus,
          onChangeText: handleSearchTextChange,
        }}
        query={{
          key: MapKey,
          language: 'en',
        }}
        styles={{
          container: {
            flex: 1,
          },
          textInput: [styles.input, inputStyle],
        }}
        renderRow={item => <PlaceRow item={item} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    padding: mvs(5),
    height: mvs(64),
    width: '100%',
  },
  primaryText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    color: colors.black,
  },
  secondaryText: {
    fontSize: 14,
    color: '#666',
  },
  input: {
    height: mvs(50),
    borderColor: colors.primary,
    borderWidth: 1,
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 16,
    borderRadius: 10,
  },
});

export default SearchLocation;
