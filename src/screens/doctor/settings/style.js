import {StyleSheet} from 'react-native';
import colors from '../../../services/colors';
import {mvs} from '../../../services/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  body: {
    flex: 1,
    padding: mvs(16),
    backgroundColor: colors.background,
  },
  gradient: {
    height: mvs(130),
    justifyContent: 'center',
    borderRadius: mvs(20),
    paddingHorizontal: mvs(20),
  },
  rowCard: {
    margin: mvs(10),
  },
  form: {
    margin: mvs(10),
  },
  profile: {
    height: mvs(90),
    width: mvs(90),
    borderRadius: mvs(20),
    borderWidth: 0.3,
    borderColor: colors.white,
  },
});
export default styles;
