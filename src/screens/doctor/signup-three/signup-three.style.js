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
  camera: {
    alignSelf: 'center',
    height: mvs(50),
    width: mvs(50),
    borderRadius: mvs(1000),
    borderColor: colors.primary,
    borderWidth: 2,
    backgroundColor: colors.white,
    padding: mvs(7),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom:mvs(-25),
  },
  cameraIcon: {
    height: mvs(50),
    width: mvs(50),
    borderRadius: mvs(1000),
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: mvs(1000),
  },
});
