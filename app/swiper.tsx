import { Image } from 'expo-image';
import { useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Swiper, type SwiperCardRefType } from 'rn-swiper-list';

type CardData = {
    title: string,
    img: any,
}

const data: CardData[] = [
    { title: 'Audrey', img: require('@/assets/images/img1.jpg') },
    { title: 'Hepburn', img: require('@/assets/images/img2.jpg') }
]

const SwiperScreen = () => {
    const swiperRef = useRef<SwiperCardRefType>()

    function renderCard(cardData: CardData) {
        return (
            <View style={styles.cardContainer}>
                <Image style={styles.cardImage} source={cardData.img} />
                <Text>{cardData.title}</Text>
            </View>
        )
    }

    return <GestureHandlerRootView style={styles.container}>
        <Swiper cardStyle={styles.card} ref={swiperRef} data={data} renderCard={renderCard}></Swiper>
    </GestureHandlerRootView>;
}


export default SwiperScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
    },
    card: {
        overflow: 'hidden',
        width: '95%',
        height: '75%',
        borderRadius: 15,
        marginVertical: 20,
        shadowColor: 'black',
        backgroundColor: 'white',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {
            width: 4,
            height: 4,
        },
    },
    cardImage: {
        flex: 1,
        borderRadius: 15,
    },
    cardContainer: {
        flex: 1,
        borderRadius: 15,
    }
});

