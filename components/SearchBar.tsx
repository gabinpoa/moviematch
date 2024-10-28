import { useEffect, useState } from 'react'
import useDebounce from '@/hooks/useDebounce'
import { useQuery } from '@tanstack/react-query'
import getSearchResults from '@/functions/getSearchResults'
import { ScrollView, View } from 'react-native'
import MovieSearchItem from './MovieSearchItem'
import { useQueryFocusAware } from '@/hooks/useQueryFocusAware'
import { useNavigation } from 'expo-router'

export default function SearchSection() {
    const [searchStr, setSearchStr] = useState('')
    const debouncedSearch = useDebounce(searchStr, 600, (str) => str.length > 3)
    const isFocused = useQueryFocusAware()

    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({
            headerLargeTitle: true,
            headerSearchBarOptions: {
                placeholder: "Friends",
                onChangeText: (event: any) => {
                    setSearchStr(event.nativeEvent.text);
                },
            },
        })
    }, [navigation])

    const { data, isLoading, isFetched } = useQuery({
        queryKey: ['search', debouncedSearch],
        queryFn: async () => {
            return (await getSearchResults(debouncedSearch)).results
        },
        enabled: isFocused,
    })

    return (
        <View style={{ flex: 1 }}>
            {isFetched &&
                <ScrollView contentContainerStyle={{ gap: 4 }}>
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
            }
        </View>
    )
}

