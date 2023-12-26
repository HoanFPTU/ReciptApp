import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant/constant';

export const style = StyleSheet.create({
  mtLarge: {
    marginTop: SIZES.marginLarge,
  },
  mtMedium: {
    marginTop: SIZES.marginMedium,
  },
  mtSmall: {
    marginTop: SIZES.marginSmall,
  },
  container: {
    flex: 1,
  },
  absolute: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  containerContent: {
    height: 400,
    bottom: 0,
    padding: SIZES.paddingLarge,
  },
  title: {
    fontSize: FONTS.fontLarge,
    color: 'white',
    fontWeight: '700',
  },
  subTitle: {
    color: COLORS.gray,
    marginTop: SIZES.marginLarge,
  },
});
