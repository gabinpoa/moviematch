import SearchSection from '@/components/search'
import { MovieMatchData, addMovieToMatch } from '@/functions/matches'
import { SearchResponseResult } from '@/types/searchResponse'
import { useMutation } from '@tanstack/react-query'
import { useLocalSearchParams } from 'expo-router'
import { auth } from '@/firebaseConfig'
import { Text } from 'react-native'

export default function AddMoviePage() {
    const { id, title: matchTitle } = useLocalSearchParams()

    if (typeof id !== 'string') {
        return <Text>Invalid match id</Text>
    }

    const mutation = useMutation({
        mutationKey: ['addMovieToMatch', id],
        mutationFn: async ({
            title,
            poster_path,
            overview,
            release_date,
            vote_average,
            original_language,
            id: movie_id,
        }: SearchResponseResult) => {
            const movieData: MovieMatchData = {
                title,
                poster_path,
                overview,
                release_year: release_date.split('-')[0],
                vote_average,
                original_language,
                user_swipe: [
                    {
                        swipe_right: true,
                        user_id: auth.currentUser.uid
                    }
                ]
            }
            return await addMovieToMatch(id, movie_id.toString(), movieData)
        }
    })

    async function onSelect(movie: SearchResponseResult) {
        await mutation.mutateAsync(movie)
    }

    return (
        <SearchSection
            onSelect={onSelect}
            title={'Add movie to ' + matchTitle}
        />
    )
}
