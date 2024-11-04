import { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import TextInput from '../../forms/TextInput';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { createMatchList } from '@/functions/matches';
import { useMutation } from '@tanstack/react-query';
import { setStringAsync } from 'expo-clipboard'
import CopyToClipboard from './Success';
import NewMatchButtons from './Buttons';


export default function CreateMatch() {
    const [dialogOpen, setDialogOpen] = useState(false)
    const [newMatchId, setNewMatchId] = useState<string>()
    const [copied, setCopied] = useState(false)


    const {
        handleSubmit,
        control,
        formState: { errors: formErrors },
    } = useForm();

    const mutation = useMutation({
        mutationFn: async (title: string) => {
            return await createMatchList(title)
        }
    })

    async function createMatchHandler({ title }: FieldValues) {
        const returnedId = await mutation.mutateAsync(title)
        setNewMatchId(returnedId)
        setDialogOpen(false)
    }

    function copyToClipboard() {
        newMatchId && setStringAsync(newMatchId).then((success) => setCopied(success));
    };

    return (
        <View className='justify-center min-h-20 p-2 items-center'>
            <Text>
                {mutation.error && mutation.error.message}
            </Text>
            <Text>
                {formErrors && formErrors.root?.message}
            </Text>
            {dialogOpen ? (
                <View>
                    <Controller
                        name='title'
                        control={control}
                        rules={{ required: 'Title is required' }}
                        render={({ field: { onChange, value } }) => {
                            return (
                                <TextInput
                                    placeholder='Match title'
                                    onChangeText={onChange}
                                    inputMode='text'
                                    value={value}
                                    error={formErrors?.password}
                                />
                            );
                        }}
                    />
                    <NewMatchButtons
                        closeDialog={() => setDialogOpen(false)}
                        onSubmit={handleSubmit(createMatchHandler)}
                    />
                </View>
            ) : (
                <Pressable className='p-2 bg-green-400' onPress={() => setDialogOpen(true)}>
                    <Text className='text-neutral-800 font-medium'>+ New match</Text>
                </Pressable>
            )}
            {newMatchId && (
                <CopyToClipboard copied={copied} copyToClipboard={copyToClipboard} />
            )}
        </View>
    )
}
