import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login'
import Menu from './screens/Menu';
import NavigationScreens from './Navigation';
import SignUp from './screens/SignUp';
import Avatar from './screens/Avatar';

const Stack = createStackNavigator();

export default function App() {
  
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Menu" 
          component={Menu}
          options={{ header: () => null }} />
        <Stack.Screen 
          name="Login" 
          component={Login}
          options={{ header: () => null }} />
        <Stack.Screen
          name="Navigation"
          component={NavigationScreens}
          options={{ header: () => null }} />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ header: () => null }} />
            <Stack.Screen
              name="Avatar"
              component={Avatar}
              options={{ header: () => null }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
