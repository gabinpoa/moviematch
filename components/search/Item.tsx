import { Pressable, View } from "react-native"
import Title from "../Title"
import Subtitle from "../Subtitle"
import PosterMiniature from "../PosterMiniature"
import { SearchResponseResult } from "@/types/searchResponse"

type MovieSearchItemProps = {
    movie: SearchResponseResult
    onSelect: (movie: SearchResponseResult) => any
}

const imgWidth = 65

export default function MovieSearchItem({ movie, onSelect }: MovieSearchItemProps) {
    const {
        poster_path,
        title,
        release_date
    } = movie
    return (
        <Pressable
            className="flex-row gap-2 p-3 border-t border-t-neutral-400"
            onPress={() => onSelect(movie)}
        >
            <PosterMiniature poster_path={poster_path} imgWidth={imgWidth} />
            <View className="justify-center">
                <Title>{title}</Title>
                <Subtitle>{release_date.split('-').at(0) as string}</Subtitle>
            </View>
        </Pressable>
    )
}
