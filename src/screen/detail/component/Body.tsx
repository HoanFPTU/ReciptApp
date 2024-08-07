import {View, Text, Image} from 'react-native';
import React from 'react';
import {IMAGES, SIZES} from '../../../constant/constant';
import {ScrollView} from 'react-native-gesture-handler';
import {style} from '../style';
import {useGetFullMealbyIDQuery} from '../../../api/FoodAPI';
import {useRoute} from '@react-navigation/native';
import {PropsRouteDetail} from '../../navigation/TypeCheck';
import {DetailMeal} from '../../../api/Type';
type PropsBody = {meal?: DetailMeal};
export default function Body({meal}: PropsBody) {
  return (
    <ScrollView style={style.cBody} contentContainerStyle={{padding: 24}}>
      <View style={style.cBodyTop}>
        <Text style={style.cBodyTitle}>{meal?.strMeal}</Text>
        <View style={style.cContainerAvatar}>
          <Image source={IMAGES.avatar} style={style.cBodyAvatar} />
          <Image source={IMAGES.avatar} style={style.cBodyAvatar} />
          <Image source={IMAGES.avatar} style={style.cBodyAvatar} />
          <Image source={IMAGES.avatar} style={style.cBodyAvatar} />
        </View>
      </View>
      <View style={style.cBodyDesc}>
        <Text style={{alignSelf: 'flex-end'}}>{meal?.strArea}</Text>
        <View>
          <Text style={{textAlign: 'right'}}>4 people</Text>
          <Text style={{textAlign: 'right'}}>Already try this!</Text>
        </View>
      </View>
      {/* Ingredients */}
      <View style={{marginTop: SIZES.marginSmall}}>
        <Text style={style.ingredientTitle}>Instruction</Text>
        <Text>{meal?.strInstructions}</Text>
      </View>
      <View style={style.cBodyIngredientTitle}>
        <Text style={style.ingredientTitle}>Ingredients</Text>
        <View>
          <Text>6 items</Text>
        </View>
      </View>
      <View style={style.containerIngredients}>
        <View style={style.ingradient}>
          <Text style={style.ingradientName}>{meal?.strIngredient1}</Text>
          <Text style={style.ingradientMeasure}>{meal?.strMeasure1}</Text>
        </View>
        <View style={style.ingradient}>
          <Text style={style.ingradientName}>{meal?.strIngredient2}</Text>
          <Text style={style.ingradientMeasure}>{meal?.strMeasure2}</Text>
        </View>
        <View style={style.ingradient}>
          <Text style={style.ingradientName}>{meal?.strIngredient3}</Text>
          <Text style={style.ingradientMeasure}>{meal?.strMeasure3}</Text>
        </View>
        <View style={style.ingradient}>
          <Text style={style.ingradientName}>{meal?.strIngredient4}</Text>
          <Text style={style.ingradientMeasure}>{meal?.strMeasure4}</Text>
        </View>
        <View style={style.ingradient}>
          <Text style={style.ingradientName}>{meal?.strIngredient5}</Text>
          <Text style={style.ingradientMeasure}>{meal?.strMeasure5}</Text>
        </View>
        <View style={style.ingradient}>
          <Text style={style.ingradientName}>{meal?.strIngredient6}</Text>
          <Text style={style.ingradientMeasure}>{meal?.strMeasure6}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
