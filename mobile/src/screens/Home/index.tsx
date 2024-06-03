import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Cards: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp
};

export const HomeScreen = ({
  navigation
}: Props) => {
  return (
    <View className='h-full w-full items-center justify-center'>
      <Text>Choose your card to pay</Text>
      <View className='mt-4'>
        <Button
          title="Choose Cards"
          onPress={() => navigation.navigate('Cards')}
        />
      </View>
    </View>
  )
}
