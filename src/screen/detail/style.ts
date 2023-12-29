import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant/constant';

export const style = StyleSheet.create({
  // header
  imageHeader: {
    width: '100%',
    height: 300,
  },
  iconHeader: {
    height: 30,
    width: 30,
  },

  cHeaderContent: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'space-between',
    padding: SIZES.paddingSmall,
  },
  cHeaderContentTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cHeaderContentBottom: {
    flexDirection: 'row',
    padding: SIZES.paddingSmall,
    backgroundColor: '#242123',
    opacity: 0.95,
    alignItems: 'center',
    borderRadius: 10,
  },
  cHeaderContentBottomText: {
    flex: 1,
    marginLeft: SIZES.marginSmall,
    marginRight: SIZES.marginSmall,
  },
  cHeaderText: {
    color: '#858388',
  },
  cHeaderName: {
    color: COLORS.white,
    fontSize: FONTS.fontSmall,
    fontWeight: '700',
  },
});
