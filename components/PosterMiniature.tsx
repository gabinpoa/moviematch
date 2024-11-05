import { View } from 'react-native'
import { Image } from 'expo-image'

type Props = {
    poster_path: string | null
    imgWidth: number
}

const BASE_URL = 'https://image.tmdb.org/t/p/w92'

export default function PosterMiniature({ poster_path, imgWidth }: Props) {
    const imageURI = BASE_URL + (poster_path ? poster_path : '/1E5baAaEse26fej7uHcjOgEE2t2.jpg')
    return (
        <View style={{ width: imgWidth, height: 1.5 * imgWidth }}>
            <Image
                contentFit="cover"
                style={{ flex: 1 }}
                source={{ uri: imageURI }}
            />
        </View>
    )
}
