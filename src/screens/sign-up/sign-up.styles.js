import { StyleSheet } from 'react-native';
import colors from '../../services/colors';
import { mvs } from '../../services/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  body: {
    paddingTop: mvs(25),
    paddingHorizontal: mvs(20)
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
});
export default styles;
