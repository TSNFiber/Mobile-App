import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './AuthContext';
import DrawerNavigator from './navigation/DrawerNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <DrawerNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}