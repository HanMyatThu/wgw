import * as React from 'react';
import { View, SafeAreaView, Text, Pressable } from 'react-native';
import { InputField } from 'components/Input/Input';
import { FormatCardExpiry } from 'utils/utility';

export const AddCardScreen = () => {
  const [number, setNumber] = React.useState('')
  const [name, setName] = React.useState('')
  const [expiry, setExpiry] = React.useState('')
  const [ccv, setCCV] = React.useState('')

  return (
    <SafeAreaView className='h-full bg-white'>
      <InputField
        key='number-input'
        value={number}
        setValue={setNumber}
        label="ATM/Debit/Credit Card Number"
        inputProps={{
          keyboardType: 'numeric',
          placeholder: '0000 0000 0000 0000',
          maxLength: 19
        }}
        isMask
        isTailingIcon
      />
      <InputField
        key='name'
        value={name}
        setValue={setName}
        label="Name On Card"
        inputProps={{
          keyboardType: "default",
          placeholder: "Name On Card",
        }}
      />
      <View className='flex flex-row justify-between'>
        <View>
          <InputField
            value={expiry}
            setValue={setExpiry}
            key='exipry-date'
            label="Expiry Date"
            inputProps={{
              keyboardType: "number-pad",
              placeholder: "MM/YY",
              maxLength: 5,
              value: FormatCardExpiry(expiry),
              className: 'border bg-white h-11 min-w-[80px] p-3 tracking-widest font-semibold text-md'
            }}
          />
        </View>
        <View>
          <InputField
            key='ccv'
            value={ccv}
            setValue={setCCV}
            label="CCV"
            inputProps={{
              keyboardType: "number-pad",
              placeholder: "",
              className: 'border bg-white h-11 min-w-[80px] p-3 tracking-widest font-semibold text-md'
            }}
          />
        </View>
      </View>
      <View className='mt-12 w-screen text-center items-center'>
        <Text className='text-foreground'>
          Verified By Visa, Omise, Master
        </Text>
      </View>
      <View className='absolute bottom-0 w-full'>
        <Pressable
          className='mx-4 bg-[#4AD8DA] border-[#4AD8DA] hover:border-cyan-600 hover:bg-cyan-600 p-4 rounded-3xl mb-4 text-center items-center'
        >
          <Text className='text-white font-bold text-lg'>
            Add Card
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}
