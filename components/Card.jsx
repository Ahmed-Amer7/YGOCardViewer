import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState, useRef } from 'react'
import { router } from 'expo-router'
import { getSpecificCards } from '../services/queries'

const Card = ({ limit, name, page, setPage }) => {

    let cards = getSpecificCards(name)

    const lastPage = Math.ceil((cards?.length / limit ))

    return (
        <View className="flex items-center justify-center">
            <View className="pt-4 flex flex-row gap-8">
                <TouchableOpacity disabled={page === 1} onPress={() => setPage(page - 1)}>
                    <Text className="text-2xl">Previous Page</Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={page === lastPage} onPress={() => setPage(page + 1)}>
                    <Text className="text-2xl">Next Page</Text>
                </TouchableOpacity>
            </View>
            {cards?.slice((page - 1) * limit, limit * page - 1).map((card) => (
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
            <View className="pt-4 flex flex-row gap-8">
                <TouchableOpacity disabled={page === 1} onPress={() => setPage(page - 1)}>
                    <Text className="text-2xl">Previous Page</Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={page === lastPage} onPress={() => setPage(page + 1)}>
                    <Text className="text-2xl">Next Page</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Card