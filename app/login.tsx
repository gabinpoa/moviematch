import { useEffect, useState } from 'react';
import { Pressable, SafeAreaView, Text, View } from 'react-native'
import { useForm, Controller } from 'react-hook-form';
import { Link, useRouter } from 'expo-router';
import ErrorText from '@/components/forms/ErrorText';
import Label from '@/components/forms/Label';
import TextInput from '@/components/forms/TextInput';
import FormButton, { formButtonStyle, formButtonTextStyle } from '@/components/forms/Button';
import { login } from '@/functions/auth';
import { useUser } from '@/context/User';

export default function Login() {
    const [loginError, setLoginError] = useState<string>();
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()
    const { user, initializing } = useUser()

    const {
        handleSubmit,
        control,
        formState: { errors: formErrors },
    } = useForm();

    async function onSubmit() {
        try {
            setIsLoading(true)
            handleSubmit(login)
        } catch (error) {
            setLoginError(`${error}`)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (initializing) return;

        if (user) {
            router.replace('/(app)/(tabs)');
        }
    }, [user, initializing]);

    return (
        <SafeAreaView className="flex-1 justify-center px-6">
            <View>
                {loginError && <ErrorText>{loginError}</ErrorText>}
                {[formErrors?.email, formErrors?.password].map((error: any, i) => (
                    <ErrorText key={i}>
                        {error?.message}
                    </ErrorText>
                ))}
                <Label>E-mail</Label>
                <Controller
                    name="email"
                    control={control}
                    rules={{ required: "E-mail is required" }}
                    render={({ field: { onChange, value } }) => {
                        return (
                            <TextInput
                                inputMode='email'
                                onChangeText={onChange}
                                value={value}
                                error={formErrors?.email}
                            />
                        );
                    }}
                />
                <Label>Password</Label>
                <Controller
                    name="password"
                    control={control}
                    rules={{ required: "Password is required" }}
                    render={({ field: { onChange, value } }) => {
                        return (
                            <TextInput
                                onChangeText={onChange}
                                value={value}
                                secureTextEntry={true}
                                error={formErrors?.password}
                            />

                        );
                    }}
                />
                <View className='gap-4 pt-8'>
                    <FormButton onPress={onSubmit} isLoading={isLoading} text='Login' />
                    <View className='gap-1'>
                        <Text className='text-neutral-500'>Don't have an account?</Text>
                        <Pressable className={formButtonStyle + " bg-transparent border-neutral-400 border"}>
                            <Link className={formButtonTextStyle + " text-neutral-500 font-medium"} href="/register">Register</Link>
                        </Pressable>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

