import React from 'react'
import { Icon } from 'components/Icon/Icon'
import { Pressable, Text } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface IButton {
  id?: string,
  onClick?: () => void,
  icon: string,
  className?: string,
}

export const AddButton = ({
  id,
  onClick,
  icon,
  className
}: IButton) => {
  return (
    <Pressable
      id={id}
      onPress={onClick}
      className={
        twMerge("bg-white p-2 border border-neutral-100 shadow-sm text-center transition hover:bg-neutral-100 hover:border-neutral-300",
          className
        )
      }>
      <Text className='text-4xl'>+</Text>
    </Pressable>
  )
}