import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './Components/SplashScreen';
import Home from './Components/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    //rediff moneywiz apk for betting 
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="home" component={Home} />
     </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App 