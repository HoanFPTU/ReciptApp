import {View, Text, Image} from 'react-native';
import React from 'react';
import {COLORS, ICONS, IMAGES, SIZES} from '../../../constant/constant';
import {style} from '../style';
import {useNavigation} from '@react-navigation/native';
import {PropsPush} from '../../navigation/TypeCheck';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Toast from 'react-native-toast-message';
import storage from '../../../storage/storage';
type PropsHeader = {url?: string};
export default function Header({url}: PropsHeader) {
  const navigation = useNavigation<PropsPush>();
  const onPressBookMark = () => {
    storage.save({key: 'oke', data: 'nguyenHoan'});
    Toast.show({
      type: 'success',
      text1: 'Success Storage',
      visibilityTime: 1000,
    });
  };
  return (
    <View>
      <Image
        source={url ? {uri: url} : IMAGES.food}
        style={style.imageHeader}
      />
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
          <TouchableOpacity onPress={onPressBookMark}>
            <Image
              source={ICONS.BOOKMARK}
              style={[style.iconHeader, {tintColor: COLORS.greenLight}]}
            />
          </TouchableOpacity>
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
