import { Image } from "expo-image"
import { View } from "react-native"
import Title from "./Title"
import Subtitle from "./Subtitle"

type MovieSearchItemProps = {
    img: string | null
    title: string
    year: string
}

const imgBaseUrl = 'https://image.tmdb.org/t/p/w92'
const imgWidth = 72

export default function MovieSearchItem({ img, title, year }: MovieSearchItemProps) {
    const imageURI = imgBaseUrl + img
    return (
        <View style={{
            flexDirection: 'row',
            paddingVertical: 4,
            paddingHorizontal: 8,
        }}>
            <View style={{ width: imgWidth, height: 1.5 * imgWidth }}>
                <Image contentFit="cover" style={{ flex: 1 }} source={{ uri: img ? imageURI : 'https://image.tmdb.org/t/p/w92/1E5baAaEse26fej7uHcjOgEE2t2.jpg' }} />
            </View>
            <View style={{
                flex: 1,
                gap: 4,
                paddingVertical: 8,
                paddingLeft: 12,
            }}>
                <Title>{title}</Title>
                <Subtitle>{year.split('-').at(0) as string}</Subtitle>
            </View>
        </View>
    )
}
