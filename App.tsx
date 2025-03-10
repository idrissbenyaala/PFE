import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Register from './components/Register';
import Login from './components/Login';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Register" component={Register} options={{ title: "S'inscrire" }} />
        <Stack.Screen name="Login" component={Login} options={{ title: "Se connecter" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
