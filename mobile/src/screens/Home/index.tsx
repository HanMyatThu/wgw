import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  Cards: { itemId: number };
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp
};

export const HomeScreen = ({
  navigation
}: Props) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Cards', { itemId: 86 })}
      />
    </View>
  )
}
