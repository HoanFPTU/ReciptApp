import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainNavigation} from './src/screen/navigation/Navigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigation />
        <Toast />
      </NavigationContainer>
    </Provider>
  );
}
