import React from 'react'
import { View } from 'react-native'

interface IIconDetails {
  viewBox?: string,
  width?: string,
  height?: string,
  fill?: string,
}

const PlusIcon = ({
  viewBox = "0 0 24 24",
  width = "24",
  height = "24",
  fill = "none"
}: IIconDetails) => {
  return (
    <View>
      <svg xmlns="http://www.w3.org/2000/svg" width="400px" height="400px" viewBox={viewBox} fill="none">
        <rect width={width} height={height} fill={fill} />
        <path d="M12 6V18" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 12H18" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </View>
  )
}

interface IIcon extends IIconDetails {
  name: string,
}

export const Icon = ({
  name,
  ...props
}: IIcon) => {
  switch (name) {
    case 'icon-plus':
      return <PlusIcon {...props} />
    default:
      break;
  }
}