/* eslint-disable prettier/prettier */
import {Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';

import {BookMarkType, STORAGE_KEY} from '../../constant/constant';
import ItemCategory from '../../components/ItemCategory';
import {useDispatch, useSelector} from 'react-redux';
import {fetchBookmarks} from '../../redux/createAsyncThunk';
import {useAppDispatch} from '../../redux/store';

export default function Bookmark() {
  const dispatch = useAppDispatch();
  const bookmarks = useSelector((state: any) => state.bookmarks.entities);
  // const status = useSelector((state: any) => state.bookmarks.status);
  // const error = useSelector((state: any) => state.bookmarks.error);

  useEffect(() => {
    dispatch(fetchBookmarks());
  }, [dispatch]);

  return (
    <SafeAreaView style={{backgroundColor: 'white', minHeight: '100%'}}>
      <ScrollView>
        {/* <Text>a1bc</Text> */}
        {/* <TouchableHighlight
          onPress={() => dispatch(fetchBookmarks())}
          style={{backgroundColor: '#aaa'}}>
          <Text style={{fontSize: 24}}>Reload</Text>
        </TouchableHighlight> */}
        <Text
          style={{
            fontSize: 24,
            color: '#aaa',
            textAlign: 'center',
            fontWeight: '900',
            fontStyle: 'italic',
            marginTop: 24,
          }}>
          BookMark List
        </Text>
        {bookmarks?.map((item: BookMarkType, index: string) => {
          return (
            <ItemCategory
              title={item?.id ?? ''}
              key={index}
              url={item?.urlImage ?? ''}
              desc={item.title}
              isBookmark={true}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
