import { View, Text, Image } from 'react-native'
import React from 'react'
import images from '../constants/images'

const Footer = () => {
  return (
    <>
        <View className="p-5 bg-[#f5f5f5] flex items-center" >
            <Image source={images.logo} className="mb-4 mt-2" />
            <Image source={images.tcgLogo} className="h-14 m-4" resizeMode='contain' />
            <Image source={images.CMLogo} className="h-14 m-4" resizeMode='contain' /> 
            <Text className="text-2xl">Your Yu-Gi-Oh! TCG Community</Text>
        </View>
    </>
  )
}

export default Footer