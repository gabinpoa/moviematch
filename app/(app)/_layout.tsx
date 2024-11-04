import { useUser } from '@/context/User'
import { Redirect, Slot, Stack } from 'expo-router';
import { ActivityIndicator } from 'react-native';

export default function AppLayout() {
    const { user, initializing } = useUser();

    if (initializing) {
        return <ActivityIndicator />
    }

    if (!user) {
        return <Redirect href="/login" />
    }

    return (
        <Stack>
            <Stack.Screen options={{ headerShown: false }} name="(tabs)" />
            <Stack.Screen options={{ headerShown: true }} name='match/[id]' />
        </Stack>
    )
}
