import {StyleSheet} from 'react-native';
import colors from '../../../services/colors';
import {mvs} from '../../../services/metrices';

export const Signup_Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  body: {
    flex: 1,
    paddingHorizontal: mvs(22),
    paddingTop: mvs(5),
  },
  file: {
    height: mvs(66),
    borderRadius: mvs(15),
    marginTop: mvs(20),
    ...colors.shadow,
    backgroundColor: colors.white,
    paddingHorizontal: mvs(10),
    borderColor: colors.primary,
  },
  input: {
    flex: 1,
    paddingHorizontal: mvs(15),
    color: colors.black,
  },
  forgotBtn: {
    alignSelf: 'flex-end',
    marginTop: mvs(3),
    marginRight: mvs(5),
  },
  optionText: {
    fontSize: mvs(20),
    paddingBottom: 5,
    color: 'black',
  },
  selectedOption: {
    borderBottomWidth: 1.5,
    textDecorationColor: colors.primary,
    borderColor: colors.primary,
  },
  check: {
    flexDirection: 'row',
    marginTop: mvs(34),
  },
  checkbox: {
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    flex: 1,
  },
});
