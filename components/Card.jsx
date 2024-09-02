import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { getSpecificCards } from '../services/queries'

const Card = ({ limit, name }) => {

    let cards = getSpecificCards(name)

    return (
        <View className="flex items-center justify-center">
            {cards?.slice(0, limit).map((card) => (
                <TouchableOpacity onPress={() => router.push(`/card/${card.name}`)} key={card.id}>
                    <View className="flex items-center">
                        <Image className="h-[204px] w-[140px] mt-5" source={{uri: card.card_images[0].image_url_small}} />
                        <Text className="text-lg mt-2">{card.name}</Text>
                        <View className="flex flex-row gap-4 mt-1 flex-wrap justify-center">
                            <Text>{card.humanReadableCardType}</Text>
                            {card.attribute && <Text>{card.attribute}</Text>}
                            <Text>{card.race}</Text>
                            {card.atk && <Text>{card.atk} ATK</Text>}
                            {card.def && <Text>{card.def} DEF</Text>}
                        </View>
                        <Text className="text-sm mt-2 text-center">{card.desc}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default Card