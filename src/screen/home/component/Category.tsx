import {View, Text} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import ItemCatogery from '../../../components/ItemCategory';
import {style} from '../Style';
import ItemCategory from '../../../components/ItemCategory';
import {useGetCategoryMealQuery} from '../../../api/FoodAPI';

export default function Category() {
  const {data} = useGetCategoryMealQuery();

  return (
    <View style={style.cCategory}>
      <View style={style.cCategoryTitleWraper}>
        <Text style={style.cCategoryTitle}>Category</Text>
        <Text>View all</Text>
      </View>
      {/* <FlatList
        data={['a', 'b', 'c']}
        renderItem={({item}) => <ItemCategory />}
      /> */}
      {/* shouldn't use FlatList due to same direction with ScrollView */}
      {data?.categories.map((item, index) => {
        return (
          <ItemCategory
            key={index}
            url={item.strCategoryThumb}
            title={item.strCategory}
            desc={item.strCategoryDescription}
          />
        );
      })}
    </View>
  );
}
