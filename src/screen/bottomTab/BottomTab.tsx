import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../home/Home';
import {COLORS, SCREENS} from '../../constant/constant';

import Search from '../search/Search';

import Bookmark from '../bookmark/Bookmark';
import {Image, View} from 'react-native';

import Setting from '../Setting/Setting';

// function MyTabBar({state, descriptors, navigation}) {
//   return (
//     <View
//       style={{
//         flexDirection: 'row',
//         height: 40,
//         justifyContent: 'space-between',
//       }}>
//       {state.routes.map((route, index) => {
//         const {options} = descriptors[route.key];
//         const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//             ? options.title
//             : route.name;
//         console.log(label);
//         const isFocused = state.index === index;

//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route.name);
//           }
//         };

//         const onLongPress = () => {
//           navigation.emit({
//             type: 'tabLongPress',
//             target: route.key,
//           });
//         };

//         return (
//           <TouchableOpacity
//             accessibilityRole="button"
//             accessibilityState={isFocused ? {selected: true} : {}}
//             accessibilityLabel={options.tabBarAccessibilityLabel}
//             testID={options.tabBarTestID}
//             onPress={onPress}
//             onLongPress={onLongPress}
//             style={{
//               flex: 1,
//             }}>
//             <Text
//               style={{
//                 color: isFocused ? '#673ab7' : '#222',
//                 textAlign: 'center',
//               }}>
//               {label}
//             </Text>
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// }
const Tab = createBottomTabNavigator();
export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: 'black',
      }}
      // tabBar={props => <MyTabBar {...props} />}
    >
      <Tab.Screen
        name={SCREENS.HOME}
        component={Home}
        options={{
          tabBarLabel: ({focused, color}) => (
            <>
              <View
                style={{
                  backgroundColor: focused ? color : null,
                  height: 4,
                  width: '70%',
                }}></View>
            </>
          ),
          tabBarIcon: ({color, size}) => (
            <View>
              <Image
                source={require('../../img/home-icon.png')}
                tintColor={color}
                size={size}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.SEARCH}
        component={Search}
        options={{
          tabBarLabel: ({focused, color}) => (
            <>
              <View
                style={{
                  backgroundColor: focused ? color : null,
                  height: 4,
                  width: '70%',
                }}></View>
            </>
          ),
          tabBarIcon: ({color, size}) => (
            <View>
              <Image
                source={require('../../img/search-icon.png')}
                tintColor={color}
                size={size}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.BOOKMARK}
        component={Bookmark}
        options={{
          tabBarLabel: ({focused, color}) => (
            <>
              <View
                style={{
                  backgroundColor: focused ? color : null,
                  height: 4,
                  width: '70%',
                }}></View>
            </>
          ),
          tabBarIcon: ({color, size}) => (
            <View>
              <Image
                source={require('../../img/bookmark-icon.png')}
                tintColor={color}
                size={size}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.SETTING}
        component={Setting}
        options={{
          tabBarLabel: ({focused, color}) => (
            <>
              <View
                style={{
                  backgroundColor: focused ? color : null,
                  height: 4,
                  width: '70%',
                }}></View>
            </>
          ),
          tabBarIcon: ({color, size}) => (
            <View>
              <Image
                source={require('../../img/setting-icon.png')}
                tintColor={color}
                size={size}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
