import {StyleSheet} from 'react-native';
import colors from '../../../services/colors';
import {mvs} from '../../../services/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  body: {
    flex: 1,
    padding: mvs(20),
    backgroundColor: colors.white,
    paddingTop: 0,
  },

  image: {
    height: mvs(90),
    width: mvs(90),
    borderRadius: mvs(20),
  },
  gradient: {
    flex: 1,
    borderTopRightRadius: mvs(30),
    borderTopLeftRadius: mvs(30),
    marginTop: mvs(30),
    marginHorizontal: mvs(-20),
    paddingTop: mvs(30),
  },
  LowerWhite: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopRightRadius: mvs(30),
    borderTopLeftRadius: mvs(30),
    paddingHorizontal: mvs(20),
    marginTop: mvs(30),
    paddingTop: mvs(20),
  },

  rowIcon: {
    paddingVertical: mvs(20),
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  inRow: {marginHorizontal: mvs(10), marginVertical: mvs(5)},
  lower1: {
    marginVertical: mvs(15),
    height: mvs(100),
    justifyContent: 'space-between',
  },
});
export default styles;
