import { Image } from "expo-image"
import { View } from "react-native"
import Title from "../Title"
import Subtitle from "../Subtitle"

type MovieSearchItemProps = {
    img: string | null
    title: string
    year: string
}

const imgBaseUrl = 'https://image.tmdb.org/t/p/w92'
const imgWidth = 65

export default function MovieSearchItem({ img, title, year }: MovieSearchItemProps) {
    const imageURI = imgBaseUrl + img
    return (
        <View className="flex-row gap-2 p-3 border-t border-t-neutral-400">
            <View style={{ width: imgWidth, height: 1.5 * imgWidth }}>
                <Image contentFit="cover" style={{ flex: 1 }} source={{ uri: img ? imageURI : 'https://image.tmdb.org/t/p/w92/1E5baAaEse26fej7uHcjOgEE2t2.jpg' }} />
            </View>
            <View className="justify-center">
                <Title>{title}</Title>
                <Subtitle>{year.split('-').at(0) as string}</Subtitle>
            </View>
        </View>
    )
}
