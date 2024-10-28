import { useUser } from '@/context/User'
import { Redirect, Stack } from 'expo-router';

export default function AppLayout() {
    const user = useUser();

    if (!user) {
        return <Redirect href="/login" />
    }

    return <Stack />
}
