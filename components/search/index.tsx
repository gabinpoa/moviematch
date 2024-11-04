import { useEffect, useState } from 'react'
import useDebounce from '@/hooks/useDebounce'
import { useQuery } from '@tanstack/react-query'
import { getSearchResults, getTrending } from '@/functions/tmdb'
import { ActivityIndicator, ScrollView, Text, View } from 'react-native'
import MovieSearchItem from './Item'
import { useQueryFocusAware } from '@/hooks/useQueryFocusAware'
import { useNavigation } from 'expo-router'

export default function SearchSection() {
    const [searchStr, setSearchStr] = useState('')
    const [showTrending, setShowTrending] = useState(true)
    const debouncedSearch = useDebounce(searchStr, 600, (str) => str.length > 3)
    const isFocused = useQueryFocusAware()

    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({
            headerLargeTitle: true,
            title: 'Search movies',
            headerSearchBarOptions: {
                placeholder: "Movie name",
                onChangeText: (event: any) => {
                    setSearchStr(event.nativeEvent.text);
                },
            },
        })
    }, [navigation])

    useEffect(() => {
        if (showTrending && debouncedSearch.length > 0) {
            setShowTrending(false)
            console.log((showTrending))
        }
    }, [debouncedSearch])

    const { data, isLoading, isFetched } = useQuery({
        queryKey: ['search', debouncedSearch, showTrending],
        queryFn: async () => {
            if (showTrending) {
                return (await getTrending()).results
            } else {
                return (await getSearchResults(debouncedSearch)).results
            }
        },
        enabled: isFocused,
        refetchOnMount: false,
    })

    if (isLoading) {
        return <ActivityIndicator />
    }


    if (isFetched) {
        return (<>
            <ScrollView>
                {showTrending && (
                    <View className='m-4 flex-row'>
                        <Text className='py-2 px-3 rounded-full bg-yellow-400'>Trending this week</Text>
                    </View>
                )}
                {
                    data?.map((item, i) => (
                        <MovieSearchItem
                            key={i}
                            img={item.poster_path}
                            title={item.title}
                            year={item.release_date}
                        />
                    ))
                }
            </ScrollView>
        </>)
    }
}

