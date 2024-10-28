import { Text } from 'react-native'

export default function ErrorText({ children }: { children: string }) {
    return (
        <Text className="text-red-600 text-center mb-3">
            {children}
        </Text>
    )
}
