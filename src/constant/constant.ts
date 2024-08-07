export const enum SCREENS {
  SPLASHSCREEN = 'SPLASHSCREEN',
  TAB = 'TAB',
  HOME = 'HOME',
  SEARCH = 'SEARCH',
  BOOKMARK = 'BOOKMARK',
  SETTING = 'SETTING',
  DETAIL = 'DETAIL',
}
export const TEXT = {
  LOGIN: 'LOGIN',
  SIGNUP: 'SIGNUP',
};
export const IMAGES = {
  backgroundSlashScreen: require('../img/splashscreen.jpg'),
  avatar: require('../img/testimonial_img1.png'),
  receiptBookMark: require('../img/fry-sushi.png'),
  food: require('../img/food-1.png'),
};
export const COLORS = {
  black: '#000000',
  transparent: 'transparent',
  white: '#FFFFFF',
  primary: '#11b88f',
  gray: 'gray',
  blackGray: '#3f3f3f',
  lightGray: '#eaebee',
  greenLight: '#B2E3BB',
};
export const SIZES = {
  paddingLarge: 36,
  paddingMedium: 24,
  paddingSmall: 16,
  paddingExtraSmall: 8,
  marginLarge: 36,
  marginMedium: 24,
  marginSmall: 16,
  marginExtraSmall: 8,
};
export const FONTS = {
  fontLarge: 36,
  fontMedium: 24,
  fontSmallMedium: 20,
  fontSmall: 16,
  fontWeightLarge: '700',
  fontWeightMedium: '500',
};
export const ICONS = {
  HOME: require('../img/home-icon.png'),
  SEARCH: require('../img/search-icon.png'),
  BOOKMARK: require('../img/bookmark-icon.png'),
  SETTING: require('../img/setting-icon.png'),
  ARROWBACK: require('../img/arrow-back-icon.png'),
  ARROWNEXT: require('../img/arrow-right-icon.png'),
};

export const STORAGE_KEY = {
  bookmark: 'BOOKMARK',
};
export type BookMarkType = {
  urlImage: string;
  title: string;
  id: string;
};
