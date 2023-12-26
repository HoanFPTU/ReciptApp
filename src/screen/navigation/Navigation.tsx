import {createStackNavigator} from '@react-navigation/stack';
import Home from '../home/Home';
import {SCREENS} from '../../constant/constant';
import SlashScreen from '../splashscreen/SlashScreen';
import BottomTab from '../bottomTab/BottomTab';

const Stack = createStackNavigator();
export const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name={SCREENS.SPLASHSCREEN} component={SlashScreen} />

      {/* component thay bằng bottom tab
      3tab nữa : search, bookmark,configuration
       */}
    </Stack.Navigator>
  );
};
