import { FC, ReactNode } from 'react'
import { Pressable, StyleSheet } from 'react-native'

type Props = {
    onPress: () => void,
    children: ReactNode
}

const StyledButton: FC<Props> = ({ onPress, children }) => {
    return (
        <Pressable onPress={onPress} style={styles.button}>{children}</Pressable>
    )
}

export default StyledButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#3A3D45',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        borderRadius: 40,
    }
})
