import { StyleSheet, TextInput as TextInputRN, TextInputProps } from 'react-native'

interface Props extends TextInputProps {
    size?: 'small' | 'normal'
}

const TextInput = (props: Props) => {
    return (
        <TextInputRN placeholderTextColor={'gray'} style={styles.input} {...props} />
    )
}

export default TextInput

const styles = StyleSheet.create({
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        paddingVertical: 4,
        paddingHorizontal: 8,
    }
})
