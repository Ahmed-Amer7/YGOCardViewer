import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import images from '../constants/images'

const Header = () => {
  return (
    <View>
        <View className="h-[8vh] bg-[#7d3e12] flex flex-row justify-between items-center">
            <Image source={images.logo} className="left-3" />
            <View className="flex flex-row gap-4 items-center">
              <TouchableOpacity>
                <Text className="text-white border border-[#935c35] p-3 bg-[#89522b] rounded-sm">01</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text className="text-white border border-[#935c35] p-3 bg-[#89522b] rounded-sm">02</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text className="text-white border border-[#935c35] p-3 bg-[#89522b] mr-3 rounded-sm">
                  <Text>03</Text>
                </Text>
              </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default Header