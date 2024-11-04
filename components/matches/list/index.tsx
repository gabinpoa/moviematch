import { getUserMatchesLists } from '@/functions/matches'
import { useQueryFocusAware } from '@/hooks/useQueryFocusAware'
import { useQuery } from '@tanstack/react-query'
import { ActivityIndicator, ScrollView } from 'react-native'
import MatchItem from './Item'

export default function MatchesList() {
    const isFocused = useQueryFocusAware()

    const { data, isLoading, isFetched } = useQuery({
        queryKey: ['matches-list'],
        queryFn: async () => await getUserMatchesLists(),
        enabled: isFocused,
        refetchOnMount: false,
    })

    if (isLoading) {
        return <ActivityIndicator />
    }

    if (isFetched) {
        return (
            <ScrollView>
                {data?.map((listData, i) => <MatchItem key={i} data={listData} />)}
            </ScrollView>
        )
    }
}
