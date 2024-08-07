// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import React from 'react';
// import Home from '../home/Home';
// import Bookmark from '../bookmark/Bookmark';
// import Setting from '../Setting/Setting';
// import Search from '../search/Search';
// import {COLORS, SCREENS} from '../../constant/constant';
// import {Image, View} from 'react-native';

// const Tab = createBottomTabNavigator();
// export default function BottomTab() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: COLORS.primary,
//         tabBarInactiveTintColor: 'black',
//       }}
//       // tabBar={props => <MyTabBar {...props} />}
//     >
//       <Tab.Screen
//         name={SCREENS.HOME}
//         component={Home}
//         options={{
//           tabBarLabel: ({focused, color}) => (
//             <>
//               <View
//                 style={{
//                   backgroundColor: focused ? color : null,
//                   height: 4,
//                   width: '70%',
//                 }}></View>
//             </>
//           ),
//           tabBarIcon: ({color, size}) => (
//             <View>
//               <Image
//                 source={require('../../img/home-icon.png')}
//                 tintColor={color}
//                 size={size}
//               />
//             </View>
//           ),
//         }}
//       />
//       <Tab.Screen
//         name={SCREENS.SEARCH}
//         component={Search}
//         options={{
//           tabBarLabel: ({focused, color}) => (
//             <>
//               <View
//                 style={{
//                   backgroundColor: focused ? color : null,
//                   height: 4,
//                   width: '70%',
//                 }}></View>
//             </>
//           ),
//           tabBarIcon: ({color, size}) => (
//             <View>
//               <Image
//                 source={require('../../img/search-icon.png')}
//                 tintColor={color}
//                 size={size}
//               />
//             </View>
//           ),
//         }}
//       />
//       <Tab.Screen
//         name={SCREENS.BOOKMARK}
//         component={Bookmark}
//         options={{
//           tabBarLabel: ({focused, color}) => (
//             <>
//               <View
//                 style={{
//                   backgroundColor: focused ? color : null,
//                   height: 4,
//                   width: '70%',
//                 }}></View>
//             </>
//           ),
//           tabBarIcon: ({color, size}) => (
//             <View>
//               <Image
//                 source={require('../../img/bookmark-icon.png')}
//                 tintColor={color}
//                 size={size}
//               />
//             </View>
//           ),
//         }}
//       />
//       <Tab.Screen
//         name={SCREENS.SETTING}
//         component={Setting}
//         options={{
//           tabBarLabel: ({focused, color}) => (
//             <>
//               <View
//                 style={{
//                   backgroundColor: focused ? color : null,
//                   height: 4,
//                   width: '70%',
//                 }}></View>
//             </>
//           ),
//           tabBarIcon: ({color, size}) => (
//             <View>
//               <Image
//                 source={require('../../img/setting-icon.png')}
//                 tintColor={color}
//                 size={size}
//               />
//             </View>
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }
// ko cần dùng đến nữa nên comments
