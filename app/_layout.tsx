import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" />
            <Stack.Screen name="name" />
            <Stack.Screen name="swiper" />
        </Stack>
    );
}

