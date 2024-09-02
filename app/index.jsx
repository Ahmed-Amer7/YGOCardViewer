import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../components/Header';
import Footer from '../components/Footer';


export default function App() {
  return (
    <>
      <SafeAreaView className="bg-[#7d3e12]">
        <Header />
        <View className="bg-white flex items-center">
          <Link className='text-3xl my-5' href={"/search"}>Go to Card Database</Link>
        </View>
        <Footer />
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}
