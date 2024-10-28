import { useState } from 'react';
import { View, SafeAreaView } from 'react-native'
import { useForm, Controller } from 'react-hook-form';
import { register } from "@/functions/auth";
import Label from '@/components/forms/Label';
import ErrorText from '@/components/forms/ErrorText';
import FormButton from '@/components/forms/Button';
import TextInput from '@/components/forms/TextInput';


export default function Register() {
    const [registerError, setRegisterError] = useState<string>();
    const [isLoading, setIsLoading] = useState(false);

    const {
        handleSubmit,
        control,
        formState: { errors: formErrors },
    } = useForm();

    async function onSubmit() {
        try {
            setIsLoading(true)
            handleSubmit(register)
        } catch (error) {
            setRegisterError(`${error}`)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <SafeAreaView className="flex-1 justify-center px-6">
            <View>
                {registerError && <ErrorText>{registerError}</ErrorText>}
                {[formErrors?.email, formErrors?.password, formErrors?.passwordConfirm].map((error: any, i) => (
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
                <Label>Confirm password</Label>
                <Controller
                    name="passwordConfirm"
                    control={control}
                    rules={{ required: "Password confirm is required" }}
                    render={({ field: { onChange, value } }) => {
                        return (
                            <TextInput
                                onChangeText={onChange}
                                value={value}
                                secureTextEntry={true}
                                error={formErrors?.passwordConfirm}
                            />
                        );
                    }}
                />
                <View className='pt-8'>
                    <FormButton onPress={onSubmit} isLoading={isLoading} text='Register' />
                </View>
            </View>
        </SafeAreaView>
    );
};

