import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../constants/images'
import Header from '../components/Header'
import { Link } from 'expo-router'

const search = () => {
  return (
    <SafeAreaView className="h-full bg-[#7d3e12]">
      <View>
        <Header />
        <View className="h-full bg-white p-4">
          <Text className="text-5xl pt-4">Card Database</Text>
          <View className="flex flex-row mt-4">
            <Link className='text-lg text-[#7d3e12]' href={"/search"}>Home</Link>
            <Text className="text-lg text-[#6c757d]">  /  Card Database</Text>
          </View>
          <View className="border mt-7 p-1.5 rounded-md border-[#ced4da] focus:border-[#c7e2fd] focus:border-[2px]">
            <TextInput className="text-lg" placeholder='Search Yu-Gi-Oh! Cards...'></TextInput>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default search