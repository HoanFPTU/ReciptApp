import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constant/constant';

export const style = StyleSheet.create({
  icon: {height: 24, width: 24},
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
  tabIconContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIconselected: {
    tintColor: COLORS.primary,
  },
  tabIconUnselected: {
    tintColor: COLORS.gray,
  },
  tabBottomLine: {
    position: 'absolute',
    bottom: 0,
    height: 3,
    width: '100%',
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  // style CustomInputWithIcon
  containerInput: {
    paddingLeft: SIZES.paddingSmall,
    paddingRight: SIZES.paddingSmall,
    height: 42,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.lightGray,
    gap: 4,
    borderRadius: 10,
  },
  input: {flex: 1, color: COLORS.black},
  // item
  item: {marginRight: SIZES.marginExtraSmall},
  itemImage: {height: 280, width: 230, borderRadius: 10},
  itemContent: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
    padding: SIZES.paddingSmall,
    alignItems: 'flex-start',
  },
  itemTextColor: {color: COLORS.white},
  itemIcon: {
    tintColor: COLORS.primary,
    // height: 25,
    // width: 25,
    objectFit: 'cover',
  },
  itemContainerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 4,
    borderRadius: 10,
    padding: SIZES.paddingExtraSmall,
    opacity: 0.95,
  },
  itemTitle: {
    fontSize: FONTS.fontSmall,
    fontWeight: '700',
  },
  // Item category
  itemCategoryItem: {
    flexDirection: 'row',
    padding: SIZES.paddingSmall,
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    marginTop: SIZES.marginSmall,
    gap: 16,
  },
  itemCategoryImage: {
    height: 70,
    width: 100,
    borderRadius: 8,
  },
  itemContainerText: {
    marginLeft: SIZES.marginSmall,
    marginRight: SIZES.marginSmall,
    flex: 1,
    justifyContent: 'space-between',
  },
  itemCategoryTitle: {
    fontSize: FONTS.fontSmallMedium,
    color: COLORS.black,
    fontWeight: '500',
  },
});
