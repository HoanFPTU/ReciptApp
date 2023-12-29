import React from 'react';
import {Image, Text, View} from 'react-native';
import {style} from '../Style';
import {IMAGES} from '../../../constant/constant';
export default function ToolBar() {
  return (
    <View style={style.toolBar}>
      <View>
        <Text style={style.titleToolBar}>Hello ByProgrammers,</Text>
        <Text style={style.subTitleToolBar}>What you want to cook today?</Text>
      </View>
      <Image source={IMAGES.avatar} style={style.avatar}></Image>
    </View>
  );
}
