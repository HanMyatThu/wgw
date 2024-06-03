import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import { VisaCard } from 'components/Card/VisaCard';
import { cardInterface } from 'interfaces';
import { withProvider } from 'utils/withProvider';
import CardRequestProvider, { useCardRequest } from "context";

import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Cards: undefined;
  AddCard: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Cards'>;

type Props = {
  navigation: HomeScreenNavigationProp
};

const CardScreen = ({
  navigation
}: Props) => {

  const [state, _] = useCardRequest();
  const { cards } = state;

  return (
    <ScrollView>
      {
        !cards.length ?
          (
            <View className='h-screen flex items-center mt-40'>
              <FontAwesome name="credit-card" size={48} color="orange" />
              <Text className='my-2 text-xl'>No cards found</Text>
              <Text className='my-2 text-md'>We recommend adding a card for easy payment</Text>
              <Pressable
                onPress={() => navigation.navigate('AddCard')}
              >
                <Text
                  className='my-2 text-[#4AD8DA] text-xl font-semibold'
                >
                  Add New Card
                </Text>
              </Pressable>
            </View>
          ) :
          (
            <View className='flex flex-col h-full w-full px-4 mt-4 items-center justify-center'>
              {
                cards.map((card: cardInterface, idx: number) => (
                  <VisaCard
                    key={idx}
                    cardNumber={card.cardNumber}
                    expiryDate={card.expiryDate}
                    ccv={card.ccv}
                    name={card.name}
                    userId={card.userId}
                  />
                ))
              }
              <Pressable
                onPress={() => navigation.navigate('AddCard')}
              >
                <Text
                  className='my-2 text-[#4AD8DA] text-xl font-semibold'
                >
                  Add New Card
                </Text>
              </Pressable>
            </View>
          )
      }
    </ScrollView>
  );
}

export default withProvider(CardRequestProvider)(CardScreen);