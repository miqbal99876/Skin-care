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
    padding: mvs(20),
    backgroundColor: colors.white,
  },
  date:{marginVertical:mvs(10)}
  
});
export default styles;
