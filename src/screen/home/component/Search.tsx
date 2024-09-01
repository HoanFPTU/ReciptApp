import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import InputWithIcon from '../../../components/CustomInputWithIcon';
import {style} from '../Style';
import {ICONS, IMAGES, SCREENS, SIZES} from '../../../constant/constant';
import {useSearchMealByNameQuery} from '../../../api/FoodAPI';
import {useNavigation} from '@react-navigation/native';
import {PropsPush} from '../../navigation/TypeCheck';

export default function Search() {

  const navigation = useNavigation<PropsPush>();

  //  phải gọi Hook ở ngoài này chứ gọi trong function là nó hk có chịu đâu nha
  var timeOutId: NodeJS.Timeout;
  const _onChangeText = (text: string) => {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }
    timeOutId = setTimeout(
      () => navigation.navigate(SCREENS.SEARCH, {dataSearch: text}),
      3000,
    );
    // navigation.push sẽ thêm 1 màn hình làm như v ko chuẩn, navigate có chưa có rồi thì chuyển, k có ms push
  };

  // const _onChangeText = (text: string) => {
  //   if (timeOutId) {
  //     clearTimeout(timeOutId);
  //   }
  //   timeOutId = setTimeout(() => setTextSearch(text), 3000);
  //   // sau ba giây k nhập nó ms search, tránh tiêu hao
  // };
  return (
    <View style={style.search}>
      <InputWithIcon onChange={_onChangeText} />
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
