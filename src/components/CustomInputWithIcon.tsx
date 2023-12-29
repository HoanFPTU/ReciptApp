import {View, Text, TextInput, Image} from 'react-native';
import React from 'react';
import {style} from './Style';
import {ICONS, IMAGES} from '../constant/constant';

export default function InputWithIcon() {
  return (
    <View style={style.containerInput}>
      <Image source={ICONS.SEARCH} style={style.icon} />
      <TextInput style={style.input}></TextInput>
    </View>
  );
  s;
}
