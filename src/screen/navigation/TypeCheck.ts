import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SCREENS} from '../../constant/constant';
import {RouteProp} from '@react-navigation/native';
export type MainStackParams = {
  HOME: undefined;
  SPLASHSCREEN: undefined;
};
export type PropsPush = NativeStackScreenProps<MainStackParams, SCREENS.HOME>;
// chỉ cần 1 cái PropsPush cho màn hình HOME là có thể làm hết cho các
//  màn hình còn lại vì type truyền vào đã đủ r
export type PropsRoute = RouteProp<MainStackParams, SCREENS.HOME>;
