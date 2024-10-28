import SearchBar from "@/components/SearchBar";
import { View, StyleSheet } from "react-native";

export default function Index() {
    return (
        <View style={[styles.container]}>
            <SearchBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
