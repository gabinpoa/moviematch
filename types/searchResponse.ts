
const responseResultExample = {
    "adult": false,
    "backdrop_path": null,
    "genre_ids": [
        35,
        18
    ],
    "id": 323667,
    "original_language": "ru",
    "original_title": "Вставай и бейся",
    "overview": "Intertwined stories from the gladiator/athletes participating to the Calcio Storico Fiorentino yearly championship.",
    "popularity": 2.744,
    "poster_path": "/rPCOC0myV3Vr7nYGMAOAOpUXgH3.jpg",
    "release_date": "2015-06-21",
    "title": "Florence Fight Club",
    "video": false,
    "vote_average": 5.722,
    "vote_count": 9
}

const responseExample = {
    "page": 1,
    "results": [
        responseResultExample
    ],
    "total_pages": 2,
    "total_results": 39
}

export type ResponseResult = Omit<typeof responseResultExample, 'backdrop_path' | 'poster_path'> & {
    backdrop_path: string | null
    poster_path: string | null
}

export type Response = Omit<typeof responseExample, 'results'> & {
    results: ResponseResult[]
}
