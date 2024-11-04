import { View, Text, Pressable } from 'react-native'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { useQuery } from '@tanstack/react-query'
import { getMatch } from '@/functions/matches'
import { useQueryFocusAware } from '@/hooks/useQueryFocusAware'
import { useLayoutEffect } from 'react'
import MatchDetails from '@/components/matches/details'

export default function MatchDetailsPage() {
    const { id, title } = useLocalSearchParams()
    const isFocused = useQueryFocusAware()
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            title,
        })
    })

    if (typeof id !== 'string') {
        return <Text>Invalid match id</Text>
    }

    const { data, error, isLoading, isFetched } = useQuery({
        queryKey: ['match', id],
        queryFn: async () => await getMatch(id),
        enabled: isFocused,
    })

    if (isLoading) {
        return <Text>Loading...</Text>
    }

    if (error) {
        return <Text>Error: {error.message}</Text>
    }

    if (isFetched && data) {
        return <MatchDetails data={data} />
    }
}