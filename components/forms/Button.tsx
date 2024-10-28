import { Text, Pressable, PressableProps, ActivityIndicator } from 'react-native'
import React from 'react'

interface Props extends PressableProps {
    isLoading?: boolean
    text?: string
}

export const formButtonStyle = "bg-sky-400 h-12 rounded-lg justify-center"
export const formButtonTextStyle = "text-white font-semibold text-base text-center"

export default function FormButton({ isLoading, onPress, disabled, text }: Props) {
    return (
        <Pressable
            onPress={onPress}
            disabled={disabled || isLoading}
            className={formButtonStyle}
        >
            {isLoading ? (
                <ActivityIndicator color="white" />
            ) : text ? (
                <Text className={formButtonTextStyle}>{text}</Text>
            ) : null}
        </Pressable>
    )
}
