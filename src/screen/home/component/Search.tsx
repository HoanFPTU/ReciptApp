import {View, Text, Image} from 'react-native';
import React from 'react';
import InputWithIcon from '../../../components/CustomInputWithIcon';
import {style} from '../Style';
import {ICONS, IMAGES, SIZES} from '../../../constant/constant';

export default function Search() {
  return (
    <View style={style.search}>
      <InputWithIcon />
      <View style={style.cHintRecipe}>
        <Image
          source={IMAGES.receiptBookMark}
          style={{width: 80, height: 80}}
        />
        <View
          style={{
            flex: 1,
            paddingLeft: SIZES.paddingSmall,
            paddingRight: SIZES.paddingSmall,
          }}>
          <Text>You have 12 recips that you haven't tried yet </Text>
          <Text style={style.cHintRecipeLink}>See recipes</Text>
        </View>
      </View>
    </View>
  );
}
