import React, { Dispatch, useState } from 'react'
import { View, Text, TextInput, TextInputProps } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import { MaskNumber } from 'utils/utility'

interface IInputField {
  value: string,
  setValue: Dispatch<string>
  label: string,
  isMask?: boolean,
  inputProps: TextInputProps,
  isTailingIcon?: boolean
}


export const InputField = ({
  value,
  setValue,
  label,
  isMask,
  inputProps,
  isTailingIcon
}: IInputField) => {

  return (
    <View className='mx-4 mt-4'>
      <Text className="block mb-2 text-sm font-medium text-gray-900">{label}</Text>
      <View className="flex flex-row relative">
        <TextInput
          onChangeText={setValue}
          value={isMask ? MaskNumber(value) : value}
          className='border bg-white h-11 min-w-full p-3 tracking-widest font-semibold text-md'
          {...inputProps}
        />
        {
          isTailingIcon && (
            <View
              className='absolute inset-y-0 right-2 pl-3 flex flex-row items-center gap-x-2 pointer-events-none'
            >
              <FontAwesome name="cc-visa" size={24} color="blue" />
              <FontAwesome name="cc-mastercard" size={24} color="orange" />
              <FontAwesome name="cc-jcb" size={24} color="gold" />
            </View>
          )
        }
      </View>
    </View>
  )
}