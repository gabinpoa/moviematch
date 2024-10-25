import { FC, ReactNode } from 'react'
import { Pressable, StyleSheet } from 'react-native'

type Props = {
    action: () => void,
    children: ReactNode
}

const SwipeButton: FC<Props> = ({ action, children }) => {
    return (
        <Pressable onPress={action} style={styles.button}>{children}</Pressable>
    )
}

export default SwipeButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#3A3D45',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        borderRadius: 40,
    }
})
