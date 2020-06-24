import React, {createContext,useReducer,useEffect,useContext} from 'react'
import { Platform, View, Text, TextInput, Button } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import TabBarIcon from '../components/TabBarIcon'
//import HomeScreen from '../screens/HomeScreen'
import MenuScreen from '../screens/MenuScreen'
import BillScreen from '../screens/BillScreen'
import LinkScreen from '../screens/LinksScreen'
import AsyncStorage from '@react-native-community/async-storage';
import {Context} from '../context/CouponContext'
const Stack = createStackNavigator();

const LogIn =({ navigation })=>{
  const {state,asdf}=useContext(Context)
  
  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
        asdf(userToken)
        //if(userToken)
        //asdf()
        //else
        //a()
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      
    };

    bootstrapAsync();
    
  }, []);
 
  return (
    
<Stack.Navigator
screenOptions={{
  headerShown: false
}}
>
{state.isLoading ? (
            // We haven't finished checking for the token yet
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : state.userToken == null ? (

  <Stack.Screen
name="Log in"
component={LinkScreen}
options={{
  title: 'Sign in',
// When logging out, a pop animation feels intuitive
  animationTypeForReplace: state.isSignout ? 'pop' : 'push',
}}
/>):(
  <Stack.Screen
name="Menu"
component={MyTabs}
/>
  )}
</Stack.Navigator>
)
}


function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Stack.Navigator initialRouteName="Menu" screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Bill" component={MyTabs1} />
      <Stack.Screen name="Menu" component={MenuScreen} />
    </Stack.Navigator>
  );
}
function MyTabs1() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Table" component={BillScreen} />
    </Tab.Navigator>
  );
}
export default LogIn
