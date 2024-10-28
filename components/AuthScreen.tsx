import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TextInput from './Input'

type Props = {
    email: string,
    setEmail
}

const AuthScreen = ({
    email,
    setEmail,
    password,
    setPassword,
}) => {
    return (
        <KeyboardAvoidingView>
            <View>
                <TextInput value={email} onChangeText={setEmail} />
                <TextInput secureTextEntry value={password} onChangeText={setPassword} />
                <Text>Register</Text>
            </View>
        </KeyboardAvoidingView>
    )
}

export default AuthScreen

const styles = StyleSheet.create({})
