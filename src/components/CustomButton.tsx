import {View, Text, Touchable, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import {style} from './Style';
type PropsButton = {
  title: string;
  style?: ViewStyle;
  onPress?: () => void;
  // để ở đây là style nữa thì trùng tên phải dùng props.style
};
export function PrimaryButton(props: PropsButton) {
  return (
    <TouchableOpacity
      style={[style.btnPrimary, props.style]}
      onPress={props.onPress}>
      <Text style={style.textWhite}>{props.title}</Text>
    </TouchableOpacity>
  );
}
export function OutlineButton(props: PropsButton) {
  return (
    <TouchableOpacity style={[style.btnOutline, props.style]}>
      <Text style={[style.textWhite]}>{props.title}</Text>
    </TouchableOpacity>
  );
}
