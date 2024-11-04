import { View, Text } from 'react-native'
import React from 'react'
import { MovieMatchData } from '@/functions/matches'
import { Image } from 'expo-image'

type Props = {
    movie: MovieMatchData
    uniqueIdentifier: any
}

const WIDTH = 92
export default function Item({ movie, uniqueIdentifier }: Props) {
    return (
        <View key={uniqueIdentifier}>
            <View style={{ height: WIDTH * 1.5, width: WIDTH }} key={uniqueIdentifier}>
                <Image style={{flex: 1}} source={"https://image.tmdb.org/t/p/w" + WIDTH + movie.poster_path} />
            </View>
            <Text>{movie.title}</Text>
        </View>
    )
}