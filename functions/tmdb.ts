import { SearchResponse, TrendingResponse } from "@/types/searchResponse";

export async function getSearchResults(query: string): Promise<SearchResponse> {
    const url = 'https://api.themoviedb.org/3/search/movie?query=' +
        encodeURI(query) + '&include_adult=false&language=en-US&page=1&api_key=' +
        process.env.EXPO_PUBLIC_API_KEY

    let response = await fetch(url)
    if (!response.ok) {
        throw new Error('Search went wrong\n' + response)
    }
    return response.json()
}

export async function getTrending(): Promise<TrendingResponse> {
    const url = 'https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=' +
        process.env.EXPO_PUBLIC_API_KEY;

    let response = await fetch(url)
    if (!response.ok) {
        throw new Error('Trending fetch went wrong\n' + response)
    }
    return response.json()
}
