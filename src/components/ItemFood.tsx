import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ICONS, SCREENS} from '../constant/constant';
import {style} from './Style';
import {useNavigation} from '@react-navigation/native';
import {PropsPush} from '../screen/navigation/TypeCheck';
type ItemFoodProps = {
  url: string;
  catogery: string;
  title: string;
  tags: string;
  // onPress?: Function;
  id: string;
};
export default function ItemFood({
  url,
  catogery,
  title,
  tags,
  id,
}: ItemFoodProps) {
  const navigation = useNavigation<PropsPush>();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.push(SCREENS.DETAIL, {id});
      }}
      style={style.item}>
      <Image
        resizeMode="cover"
        style={style.itemImage}
        // source={IMAGES.backgroundSlashScreen}
        source={{uri: url}}
      />
      <View style={style.itemContent}>
        <View style={[style.itemContainerContent, {backgroundColor: '#333'}]}>
          <Text style={[style.itemTextColor, style.itemTitle]}>{catogery}</Text>
        </View>
        <View style={[style.itemContainerContent, {backgroundColor: '#333'}]}>
          <View style={{flex: 1}}>
            <Text style={[style.itemTextColor, style.itemTitle]}>{title}</Text>
            <Text style={style.itemTextColor}>{tags ? tags : ''}</Text>
          </View>

          <Image style={[style.itemIcon]} source={ICONS.BOOKMARK} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
