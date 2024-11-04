import "@/global.css";
import { UserProvider } from "@/context/User";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";

const queryClient = new QueryClient()

export default function RootLayout() {
    return (
        <QueryClientProvider client={queryClient}>
            <UserProvider>
                <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="login" />
                    <Stack.Screen name="register" />
                </Stack>
            </UserProvider>
        </QueryClientProvider>
    );
}

