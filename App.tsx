import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainNavigation} from './src/screen/navigation/Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}
