import {View, Text, Image} from 'react-native';
import React from 'react';
import {ICONS} from '../constant/constant';
import {style} from './Style';
type TabIconProps = {
  focused: boolean;
  icon: any;
};
export default function TabIcon({focused, icon}: TabIconProps) {
  return (
    <View style={style.tabIconContainer}>
      <Image
        source={icon}
        style={focused ? style.tabIconselected : style.tabIconUnselected}
      />
      {focused && <View style={style.tabBottomLine}></View>}
    </View>
  );
}
