import { View, Text, Pressable } from 'react-native'

type Props = {
    copied: boolean
    copyToClipboard: () => void
}

export default function CopyToClipboard({ copied, copyToClipboard }: Props) {
    return (
        <View>
            <Text>Created with success</Text>
            <Pressable className={copied ? 'bg-green-500' : 'bg-blue-500'} onPress={copyToClipboard}>
                <Text className='text-white'>{copied ? 'Copied' : 'Copy to clipboard'}</Text>
            </Pressable>
        </View>
    )
}
