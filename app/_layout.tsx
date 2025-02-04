
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './index';
import TestVocabScreen from './TestVocab';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
const Stack = createNativeStackNavigator();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    <>
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "中 文 很 好" }}
        />
        <Stack.Screen
          name="TestVocabScreen"
          component={TestVocabScreen}
          options={{ title: "Test Your Vocabulary" }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
