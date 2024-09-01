import { View, Text, Image } from 'react-native'
import React from 'react'
import getCards from '../services/api'

const Card = () => {

    const cards = getCards()

    return (
        <View className="flex items-center justify-center">
            {cards?.slice(0, 21).map((card) => (
                <View key={card.id} className="flex items-center">
                    <Image className="h-[204px] w-[140px] mt-5" source={{uri: card.card_images[0].image_url_small}} />
                    <Text className="text-lg mt-2">{card.name}</Text>
                    <View className="flex flex-row gap-4 mt-1">
                        <Text>{card.humanReadableCardType}</Text>
                        {card.attribute && <Text>{card.attribute}</Text>}
                        <Text>{card.race}</Text>
                        {card.atk && <Text>{card.atk} ATK</Text>}
                        {card.def && <Text>{card.def} DEF</Text>}
                    </View>
                    <Text className="text-sm mt-2 text-center">{card.desc}</Text>
                </View>
            ))}
        </View>
    )
}

export default Card