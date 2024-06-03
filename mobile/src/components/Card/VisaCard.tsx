import React from 'react'
import { View, Image, Text } from 'react-native'
import { cardInterface } from 'interfaces'

export const VisaCard = ({
  cardNumber,
  name,
  expiryDate,
}: cardInterface) => {
  return (
    <View className="block min-w-full p-8 shadow-lg bg-white border border-gray-200 rounded-lg hover:bg-gray-100">
      <Text className="mb-2 text-3xl font-bold tracking-tight text-blue-900">VISA</Text>
      <Text className="mt-3 text-xl space-x-1 font-light tracking-widest  text-gray-700 dark:text-gray-400">•••• •••• •••• 1231</Text>
      <View className="mt-4 flex flex-row justify-between">
        <View className='flex flex-col'>
          <Text className='font-light text-sm tracking-tight text-neutral-600'>
            Name on Card
          </Text>
          <Text className='mt-2 font-semibold text-neutral-800'>
            Draz
          </Text>
        </View>
        <View className='flex flex-col'>
          <Text className='font-light text-sm tracking-tight text-neutral-600'>
            Expires
          </Text>
          <Text className='mt-2 font-semibold text-neutral-800'>
            12/05
          </Text>
        </View>
      </View>
    </View>
  )
}