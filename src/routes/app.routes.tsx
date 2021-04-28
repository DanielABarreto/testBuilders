import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainWeather from '../pages/MainWeather/MainWeather';
import Error from '../pages/error/error';

const Stack = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="MainWeather">
      <Stack.Screen name="MainWeather" component={MainWeather} />
      <Stack.Screen name="Error" component={Error} />
    </Stack.Navigator>
  );
};

export default AppRoutes;
