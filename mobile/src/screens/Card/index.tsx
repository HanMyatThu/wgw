import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useCardHooks } from 'hooks/useCardHooks';
import { FontAwesome } from '@expo/vector-icons'
import { VisaCard } from 'components/Card/VisaCard';
import { cardInterface } from 'interfaces';

export const CardScreen = () => {

  const { cards } = useCardHooks()

  return (
    <View>
      {
        !cards.length ?
          (
            <View className='h-screen flex items-center mt-40'>
              <FontAwesome name="credit-card" size={48} color="orange" />
              <Text className='my-2 text-xl'>No cards found</Text>
              <Text className='my-2 text-md'>We recommend adding a card for easy payment</Text>
              <Pressable>
                <Text
                  className='my-2 text-[#4AD8DA] text-xl font-semibold'
                >
                  Add New Card
                </Text>
              </Pressable>
            </View>
          ) :
          (
            <View className='flex mx-4 my-8 items-center justify-center gap-3'>
              {
                cards.map((card: cardInterface, idx: number) => (
                  <VisaCard
                    key={idx}
                    cardNumber={card.cardNumber}
                    expiryDate={card.expiryDate}
                    name={card.name}
                    userId={card.userId}
                  />
                ))
              }
            </View>
          )
      }
    </View>
  );
}
