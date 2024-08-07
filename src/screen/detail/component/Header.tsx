import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  BookMarkType,
  COLORS,
  ICONS,
  IMAGES,
  SIZES,
  STORAGE_KEY,
} from '../../../constant/constant';
import {style} from '../style';
import {useNavigation} from '@react-navigation/native';
import {PropsPush} from '../../navigation/TypeCheck';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Toast from 'react-native-toast-message';
import storage from '../../../storage/storage';
import {
  addBookmark,
  isBookmark,
  removeBookmark,
} from '../../../redux/createAsyncThunk';
import {useAppDispatch} from '../../../redux/store';
type PropsHeader = {
  urlImage: string;
  id: string;
  title: string;
};
export default function Header({urlImage, id, title}: PropsHeader) {
  const navigation = useNavigation<PropsPush>();
  const dispatch = useAppDispatch();
  const [isFav, setIsFav] = useState<any>(false);
  const checkBookmark = async (id: string) => {
    dispatch(isBookmark(id)).then(data => {
      setIsFav(data.payload);
    });
  };
  const handleAddBookmark = () => {
    dispatch(addBookmark({id, title, urlImage})).then(data => {
      Toast.show({
        type: 'success',
        text1: `Add ${title} to bookmark successfully`,
      });
      checkBookmark(id);
    });
  };
  const handleRemoveBookmark = () => {
    dispatch(removeBookmark(id)).then(data => {
      Toast.show({
        type: 'success',
        text1: `Remove ${title}  to bookmark successfully`,
      });
      checkBookmark(id);
    });
  };

  useEffect(() => {
    checkBookmark(id);
  }, [dispatch, id]);
  return (
    <View>
      <Image
        source={urlImage ? {uri: urlImage} : IMAGES.food}
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
          <TouchableOpacity
            onPress={() =>
              isFav ? handleRemoveBookmark() : handleAddBookmark()
            }>
            <Image
              source={ICONS.BOOKMARK}
              style={[
                style.iconHeader,
                {tintColor: isFav ? COLORS.greenLight : COLORS.black},
              ]}
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
