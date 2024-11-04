import { View, Text, Pressable } from 'react-native'

type Props = {
    closeDialog: () => void
    onSubmit: () => void
}

export default function NewMatchButtons({ closeDialog, onSubmit }: Props) {
    return (
        <View className='flex-row gap-2'>
            <Pressable className='p-3 bg-red-500' onPress={closeDialog}>
                <Text className='text-white'>Cancel</Text>
            </Pressable>
            <Pressable className='p-3 bg-blue-500' onPress={onSubmit}>
                <Text className='text-white'>Create</Text>
            </Pressable>
        </View>
    )
}
