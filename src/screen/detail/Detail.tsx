import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from './component/Header';
import Body from './component/Body';
import {useRoute} from '@react-navigation/native';
import {PropsRouteDetail} from '../navigation/TypeCheck';
import {useGetFullMealbyIDQuery} from '../../api/FoodAPI';
import {useAppDispatch} from '../../redux/store';
import {isBookmark} from '../../redux/createAsyncThunk';

export default function Detail() {
  const route = useRoute<PropsRouteDetail>();
  const {data} = useGetFullMealbyIDQuery(route.params.id);
  const meal = data?.meals[0];

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header
        urlImage={meal?.strMealThumb ?? ''}
        id={route.params.id ?? ''}
        title={meal?.strMeal ?? ''}
      />
      <Body meal={meal} />
    </SafeAreaView>
  );
}
