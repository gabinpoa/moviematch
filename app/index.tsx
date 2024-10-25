import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
    return (
        <View style={styles.container}>
            <Text>Edit app/index.tsx to edit this screen.</Text>
            <Link href="/name" style={styles.link}>Ir para nome</Link>
            <Link href="/swiper" style={styles.link}>Ir swiper</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
    },
    link: {
        borderWidth: 1,
        borderColor: 'grey',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 4,
    }
})
