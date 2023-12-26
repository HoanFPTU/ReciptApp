import {StyleSheet} from 'react-native';
import {COLORS, SIZES, TEXT} from '../constant/constant';

export const style = StyleSheet.create({
  btnPrimary: {
    padding: SIZES.paddingSmall,
    backgroundColor: COLORS.primary,
    borderRadius: 8,
  },
  textWhite: {
    color: COLORS.white,
    textAlign: 'center',
    fontWeight: '700',
  },
  btnOutline: {
    padding: SIZES.paddingSmall,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
});
