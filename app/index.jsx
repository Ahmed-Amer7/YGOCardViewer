import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const { data, isError, isLoading } = useQuery({
    queryKey: ["cards"],
    queryFn: () => fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php").then((res) => res.json()),
    staleTime: Infinity
  })

  if (isError) return <Text>Fetching Failed</Text>
  if (isLoading) return <View className="flex-1 justify-center items-center"><Text>Loading Data</Text></View>

  const cards = data.data

  return (
    <View className="flex-1 items-center justify-center">
      {cards.slice(0,11).map((card) => (
        <Text key={card.id}>Name: {card.name}</Text>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}
