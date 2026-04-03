import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navegators/StackNavegator';
import { SQLiteProvider } from 'expo-sqlite';

export default function App() {
  return (
     <SQLiteProvider databaseName="carrito.db">
      <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
    </SQLiteProvider>
  );
}
