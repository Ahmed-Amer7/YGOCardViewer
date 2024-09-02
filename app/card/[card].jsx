import { View, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'

import { getSpecificCard } from '../../services/queries'

const card = () => {

    const { card } = useLocalSearchParams()
    const specificCard = getSpecificCard(card)

    if (specificCard[1]) return <Text>Loading</Text>

    const { name, card_images } = specificCard[0]

  return (
    <SafeAreaView>
        <Text>{name}</Text>
        <Image source={{ uri: card_images[0].image_url }} resizeMode='contain' className="h-[500px]" />
    </SafeAreaView>
  )
}

export default card