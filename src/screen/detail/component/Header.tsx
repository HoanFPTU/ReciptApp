import {View, Text, Image} from 'react-native';
import React from 'react';
import {COLORS, ICONS, IMAGES, SIZES} from '../../../constant/constant';
import {style} from '../style';
import {useNavigation} from '@react-navigation/native';
import {PropsPush} from '../../navigation/TypeCheck';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Header() {
  const navigation = useNavigation<PropsPush>();
  return (
    <View>
      <Image source={IMAGES.food} style={style.imageHeader} />
      <View style={style.cHeaderContent}>
        <View style={style.cHeaderContentTop}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={ICONS.ARROWBACK}
              style={[style.iconHeader, {tintColor: COLORS.white}]}
            />
          </TouchableOpacity>
          {/* arrow-back */}
          <Image
            source={ICONS.BOOKMARK}
            style={[style.iconHeader, {tintColor: COLORS.greenLight}]}
          />
          {/* bookmark */}
        </View>
        <View
          style={{
            paddingLeft: SIZES.paddingSmall,
            paddingRight: SIZES.paddingSmall,
          }}>
          <View style={style.cHeaderContentBottom}>
            <Image
              source={IMAGES.avatar}
              style={[style.iconHeader, {borderRadius: 50}]}
            />
            {/*avatar */}
            <View style={[style.cHeaderContentBottomText]}>
              <Text style={style.cHeaderText}>Recipt by:</Text>
              <Text style={style.cHeaderName}>Maria</Text>
            </View>
            <Image
              source={ICONS.ARROWNEXT}
              style={[style.iconHeader, {tintColor: COLORS.greenLight}]}
            />
            {/* next */}
          </View>
        </View>
      </View>
    </View>
  );
}
