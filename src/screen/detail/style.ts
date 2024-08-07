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
  // Body
  cBody: {
    // padding: SIZES.paddingSmall,
  },
  cBodyTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },

  cContainerAvatar: {flexDirection: 'row'},
  cBodyAvatar: {
    height: 40,
    width: 40,
    borderRadius: 50,
    marginLeft: -10,
  },
  cBodyTitle: {
    color: COLORS.black,
    fontSize: FONTS.fontMedium,
    flex: 1,
    fontWeight: '700',
  },
  cBodyDesc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SIZES.marginExtraSmall,
  },
  cBodyIngredientTitle: {
    marginTop: SIZES.marginSmall,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SIZES.paddingExtraSmall,
  },
  ingredientTitle: {
    fontSize: FONTS.fontSmall,
    fontWeight: '700',
    color: COLORS.black,
  },
  containerIngredients: {
    gap: 8,
  },
  ingradient: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ddd',
    padding: SIZES.paddingExtraSmall,
    borderRadius: 8,
  },
  ingradientName: {color: COLORS.black},
  ingradientMeasure: {},
});
