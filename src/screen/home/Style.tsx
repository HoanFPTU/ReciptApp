import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant/constant';

export const style = StyleSheet.create({
  home: {backgroundColor: COLORS.white, flex: 1},

  avatar: {height: 42, width: 42, borderRadius: 21},
  toolBar: {
    padding: SIZES.paddingSmall,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleToolBar: {
    fontSize: FONTS.fontMedium,
    color: COLORS.primary,
    fontWeight: '700',
  },
  subTitleToolBar: {
    color: COLORS.blackGray,
  },
  search: {
    paddingLeft: SIZES.paddingSmall,
    paddingRight: SIZES.paddingSmall,
  },
  cHintRecipe: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.greenLight,
    marginTop: SIZES.marginMedium,
    borderRadius: 10,
    padding: SIZES.paddingSmall,
  },
  cHintRecipeLink: {
    marginTop: SIZES.marginSmall,
    color: COLORS.primary,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  cTrending: {
    padding: SIZES.paddingSmall,
  },
  cTrendingTitle: {
    color: COLORS.black,
    fontSize: FONTS.fontMedium,
    fontWeight: '700',
    marginBottom: SIZES.marginSmall,
  },
  cCategory: {
    padding: SIZES.paddingSmall,
  },
  cCategoryTitleWraper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cCategoryTitle: {
    color: COLORS.black,
    fontSize: FONTS.fontMedium,
    fontWeight: '700',
  },
});
