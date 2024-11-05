import { View, Text } from 'react-native'
import React from 'react'
import { MatchData } from '@/functions/matches'
import MoviesList from './moviesList'

type Props = {
    data: MatchData
}
export default function MatchDetails({ data }: Props) {
    return (
        <View>
            <View className='flex-row'>
                <Text>Movies added: </Text>
                <Text>{data.movies.length}</Text>
            </View>
            <MoviesList movies={data.movies} />
        </View>
    )
}
