import {View, Text, Image} from 'react-native';
import React from 'react';
import {IMAGES} from '../constant/constant';
import {style} from './Style';
type PropsItemCategory = {
  url: string;
  title: string;
  desc: string;
};
export default function ItemCategory({url, title, desc}: PropsItemCategory) {
  return (
    <View style={style.itemCategoryItem}>
      <Image style={style.itemCategoryImage} source={{uri: url}} />
      <View style={style.itemContainerText}>
        <Text style={style.itemCategoryTitle}>{title}</Text>
        <Text numberOfLines={2}>{desc}</Text>
      </View>
    </View>
  );
}
