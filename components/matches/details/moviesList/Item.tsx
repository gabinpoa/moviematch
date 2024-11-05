import { View } from 'react-native'
import React from 'react'
import { MovieMatchData } from '@/functions/matches'
import { Image } from 'expo-image'
import Title from '@/components/Title'

type Props = {
    movie: MovieMatchData
}

const WIDTH = 92
export default function Item({ movie }: Props) {
    return (
        <View>
            <View style={{ height: WIDTH * 1.5, width: WIDTH }}>
                <Image className='flex-1' contentFit='cover' source={"https://image.tmdb.org/t/p/w92" + movie.poster_path} />
            </View>
            <Title>{movie.title}</Title>
        </View>
    )
}
