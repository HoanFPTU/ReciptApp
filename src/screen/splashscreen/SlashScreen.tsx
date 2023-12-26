import {View, Text, Image} from 'react-native';
import React from 'react';
import {COLORS, IMAGES, TEXT} from '../../constant/constant';

import {style} from './Style';
import LinearGradient from 'react-native-linear-gradient';
import {OutlineButton, PrimaryButton} from '../../components/CustomButton';

export default function SlashScreen() {
  return (
    <View style={style.container}>
      <Image source={IMAGES.backgroundSlashScreen} resizeMode="stretch" />
      <LinearGradient
        style={style.absolute}
        colors={[COLORS.transparent, COLORS.black]}>
        <View style={[style.absolute, style.containerContent]}>
          <Text style={style.title}>Cooking a Delicious Food Easily</Text>
          <Text style={style.subTitle}>
            Discover more than 1200 food recipts in your hands and cooking it
            easily !
          </Text>
          <PrimaryButton title={TEXT.LOGIN} style={style.mtLarge} />
          <OutlineButton title={TEXT.SIGNUP} style={style.mtMedium} />
        </View>
      </LinearGradient>
    </View>
  );
}
