import {View, Text} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import ItemFood from '../../../components/ItemFood';
import {style} from '../Style';
import {useGetTrendingMealQuery} from '../../../api/FoodAPI';

export default function Trending() {
  const {data, isError, isFetching} = useGetTrendingMealQuery();

  // const onSendToDetailPage = () => {
  //   console.log('chưa nhấn mà');

  // };
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
            id={item.idMeal}
            // onPress={onSendToDetailPage}
          />
        )}
      />
    </View>
  );
}
