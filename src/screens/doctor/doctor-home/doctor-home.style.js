import {StyleSheet} from 'react-native';
import colors from '../../../services/colors';
import {mvs} from '../../../services/metrices';

export const Home_Styles = StyleSheet.create({
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
    marginTop: mvs(20),
  },
  input: {
    flex: 1,
    paddingHorizontal: mvs(15),
    color: colors.black,
  },

  check: {
    flexDirection: 'row',
    marginTop: mvs(34),
  },
  checkbox: {
    marginRight: mvs(10),
  },
  label: {
    fontSize: mvs(16),
    flex: 1,
  },
  card: {
    marginTop: mvs(30),
    backgroundColor: colors.white,
    elevation: mvs(10),
    paddingHorizontal: mvs(20),
    paddingTop: mvs(10),
    paddingBottom: mvs(10),
    borderRadius: mvs(10),
  },
});
