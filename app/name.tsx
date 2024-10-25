import { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

export default function Name() {
    const [name, setName] = useState('')
    return (
        <View style={styles.container}>
            <TextInput onChangeText={setName} style={styles.input} placeholder='Insira seu nome' value={name} />
            <Text>Seu nome é {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        height: 40,
        paddingVertical: 8,
        paddingHorizontal: 12,
        shadowRadius: 2,
        shadowColor: 'grey',
    }
})
