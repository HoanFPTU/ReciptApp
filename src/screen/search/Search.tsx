import {View, Text} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {PropRouteSearch} from '../navigation/TypeCheck';
import {useSearchMealByNameQuery} from '../../api/FoodAPI';

export default function Search() {
  const params = useRoute<PropRouteSearch>().params;

  const {data, isLoading} = useSearchMealByNameQuery(params.dataSearch);
  console.log('detail', data);
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
}
