import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import ToolBar from './component/ToolBar';
import {SafeAreaView} from 'react-native-safe-area-context';
import InputWithIcon from '../../components/CustomInputWithIcon';
import Search from './component/Search';
import {style} from './Style';
import Trending from './component/Trending';
import Category from './component/Category';

export default function Home() {
  return (
    <SafeAreaView style={style.home}>
      <ToolBar />
      {/* Scrool View ở đây để có gì scroll ko trôi thằng search */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        // hide scroll indicator
        // style={{marginBottom: 56}}
      >
        <Search />
        <Trending />
        <Category />
      </ScrollView>
    </SafeAreaView>
  );
}
