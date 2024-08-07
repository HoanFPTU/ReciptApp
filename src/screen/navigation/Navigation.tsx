import {createStackNavigator} from '@react-navigation/stack';
import Home from '../home/Home';
import {COLORS, ICONS, SCREENS} from '../../constant/constant';
import SlashScreen from '../splashscreen/SlashScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Search from '../search/Search';
import Bookmark from '../bookmark/Bookmark';
import Setting from '../Setting/Setting';
import {Image, View} from 'react-native';
import TabIcon from '../../components/TabIcon';
import Detail from '../detail/Detail';
import {MainStackParams} from './TypeCheck';

const Stack = createStackNavigator<MainStackParams>();
const Tab = createBottomTabNavigator();
export const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animationEnabled: false}}>
              <Stack.Screen name={SCREENS.TAB} component={TabNavigation} />
      <Stack.Screen name={SCREENS.DETAIL} component={Detail} />

      <Stack.Screen name={SCREENS.SPLASHSCREEN} component={SlashScreen} />

      {/* component thay bằng bottom tab
      3tab nữa : search, bookmark,configuration
       */}
    </Stack.Navigator>
  );
};
// export default function BottomTab() {
//   return (

//   );
// }

export function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: 'black',
        tabBarShowLabel: false,
        headerShown: false,
        // cái này để cho bottom tab nó ở dưới...bth nó cũng ở dưới rồi mà ở đây thì mình làm cho kĩ hơn thôi
        tabBarStyle: {
          // position: 'absolute',
          // bottom: 0,
          // left: 0,
          // right: 0,
          // elevation: 1,
          height: 56,
        },
      }}
      // tabBar={props => <MyTabBar {...props} />}
    >
      <Tab.Screen
        name={SCREENS.HOME}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={  focused} icon={ICONS.HOME} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.SEARCH}
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon={ICONS.SEARCH} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.BOOKMARK}
        component={Bookmark}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon={ICONS.BOOKMARK} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.SETTING}
        component={Setting}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon={ICONS.SETTING} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
