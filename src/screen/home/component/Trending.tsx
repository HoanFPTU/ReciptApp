import {View, Text} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import ItemFood from '../../../components/ItemFood';
import {style} from '../Style';
import {Meal, useGetTrendingMealQuery} from '../../../api/FoodAPI';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../../constant/constant';
import {PropsPush} from '../../navigation/TypeCheck';

export default function Trending() {
  const {data, isError, isFetching} = useGetTrendingMealQuery();
  const navigation = useNavigation<PropsPush>();
  const onSendToDetailPage = () => {
    navigation.push(SCREENS.DETAIL);
  };
  return (
    <View style={style.cTrending}>
      <Text style={style.cTrendingTitle}>Trending Receipt</Text>
      <FlatList
        horizontal
        data={data?.meals}
        renderItem={({item}) => (
          <ItemFood
            catogery={item?.strCategory}
            tags={item.strTags}
            title={item.strMeal}
            url={item.strMealThumb}
            onPress={onSendToDetailPage}
          />
        )}
      />
    </View>
  );
}
