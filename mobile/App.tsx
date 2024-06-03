import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from 'screens/Home';
import { CardScreen } from 'screens/Card';
import { AddButton } from 'components/Button/AddButton';
import { AddCardScreen } from 'screens/Card/AddCard';

const Stack = createStackNavigator();

function MyStack() {

  const onClick = () => {

  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="Cards"
        component={CardScreen}
        options={{ title: 'Cards', headerRight: () => <AddButton icon='icon-plus' /> }}
      />
      <Stack.Screen
        name="AddCard"
        component={AddCardScreen}
        options={{ title: 'Add A New Card' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

