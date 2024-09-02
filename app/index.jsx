import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import { Link } from 'expo-router'
import { Picker } from '@react-native-picker/picker'
import Card from '../components/Card'
import Footer from '../components/Footer'

const search = () => {

  const [limit, setLimit] = useState(31)
  const [input, setInput] = useState('')
  const [cardName, setCardName] = useState('')

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      setCardName(input)
    }, 2000)

    return () => clearTimeout(delaySearch)
  }, [input])

  return (
    <SafeAreaView className="h-auto bg-[#7d3e12]">
      <View>
        <Header className="bg-[#7d3e12]" />
        <ScrollView>
          <View className=" bg-white p-4">
            <Text className="text-5xl pt-4">Card Database</Text>
            <View className="flex flex-row mt-4">
              <Link className='text-lg text-[#7d3e12]' href={"/search"}>Home</Link>
              <Text className="text-lg text-[#6c757d]">  /  Card Database</Text>
            </View>
            <View className="border mt-7 p-1.5 rounded-md border-[#ced4da] focus:border-[#c7e2fd] focus:border-[2px]">
              <TextInput onChangeText={(value) => setInput(value)} value={input} className="text-lg" placeholder='Search Yu-Gi-Oh! Cards...'></TextInput>
            </View>
            <View className="flex flex-row gap-6 items-center h-24">
              <Text className=" text-white rounded-sm p-3 bg-[#7d3e12]">01</Text>
              <View className="flex-1 border border-[#ced4da] h-10 rounded-md focus:border-[2px] focus:border-[#c7e2fd]">
                <Picker selectedValue={limit} onValueChange={(itemValue) => setLimit(itemValue)} style={{color: 'gray', bottom: 5}}>
                  <Picker.Item label='Limit 30' value={10} />
                  <Picker.Item label='Limit 50' value={51} />
                  <Picker.Item label='Limit 100' value={101} />
                </Picker>
              </View>
              <Text className="p-2 rounded-sm text-white bg-[#7d3e12]">02</Text>
              <Text className="p-2 rounded-sm text-white bg-[#7d3e12]">03</Text>
            </View>
            <View className="h-auto bg-[#f8f9fb] rounded-lg border border-[#dddfde] pb-5">
              <Card limit={limit} name={cardName} />
            </View>
            <View className="pb-28 mt-6 h-full w-[100vw] right-4 ml-[calc(50%_-_50vw)]">
              <Footer />  
            </View>
          </View>    
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default search