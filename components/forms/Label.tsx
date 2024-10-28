import { Text } from 'react-native'

export default function Label({ children }: { children: string }) {
    return <Text className="font-semibold text-base text-neutral-500">{children}</Text>
}
