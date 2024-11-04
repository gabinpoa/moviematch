import { ScrollView } from 'react-native'
import React from 'react'
import { MovieMatchData } from '@/functions/matches'
import MovieItem from './Item'

type Props = {
    movies: MovieMatchData[]
}
export default function MoviesList({movies}: Props) {
  return (
    <ScrollView>
        {movies.map((movie, i) => (
            <MovieItem uniqueIdentifier={i} movie={movie} />
        ))}
    </ScrollView>
  )
}