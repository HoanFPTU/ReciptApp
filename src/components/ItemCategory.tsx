import {View, Text, Image, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';
import {IMAGES, SCREENS} from '../constant/constant';
import {style} from './Style';
import {useNavigation} from '@react-navigation/native';
import {PropsPush} from '../screen/navigation/TypeCheck';
type PropsItemCategory = {
  url: string;
  title: string;
  desc: string;
  isBookmark?: boolean;
};
export default function ItemCategory({
  url,
  title,
  desc,
  isBookmark,
}: PropsItemCategory) {
  const navigation = useNavigation<PropsPush>();
  return (
    <TouchableOpacity
      onPress={() =>
        isBookmark && navigation.push(SCREENS.DETAIL, {id: title})
      }>
      <View style={style.itemCategoryItem}>
        <Image style={style.itemCategoryImage} source={{uri: url}} />
        <View style={style.itemContainerText}>
          <Text style={style.itemCategoryTitle}>{title}</Text>
          <Text numberOfLines={2}>{desc}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
