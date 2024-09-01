import {View, Text, TextInput, Image} from 'react-native';
import React from 'react';
import {style} from './Style';
import {ICONS, IMAGES} from '../constant/constant';

type InPutProps = {
  onChange: Function;
};
export default function InputWithIcon({onChange}: InPutProps) {
  return (
    <View style={style.containerInput}>
      <Image source={ICONS.SEARCH} style={style.icon} />
      <TextInput
        style={style.input}
        onChangeText={data => onChange(data)}></TextInput>
    </View>
  );
}
