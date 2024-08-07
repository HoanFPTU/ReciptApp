import React from 'react';
import {Image, Text, Touchable, TouchableOpacity, View} from 'react-native';
import {style} from '../Style';
import {IMAGES, SCREENS} from '../../../constant/constant';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {PropsPush} from '../../navigation/TypeCheck';

export default function ToolBar() {
  const navigation = useNavigation<PropsPush>();
  return (
    <View style={style.toolBar}>
      <View>
        <Text style={style.titleToolBar}>Hello ByProgrammers,</Text>
        <Text style={style.subTitleToolBar}>What you want to cook today?</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.push(SCREENS.SPLASHSCREEN);
        }}>
        <Image source={IMAGES.avatar} style={style.avatar}></Image>
      </TouchableOpacity>
    </View>
  );
}
