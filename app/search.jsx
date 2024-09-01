import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';


export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Hello World</Text>
      <Link href={"/search"}>Go to Search Page</Link>
      <StatusBar style="auto" />
    </View>
  );
}
