import { createContext, useContext, useEffect, useState } from "react";
import { auth } from '@/firebaseConfig'
import { User } from 'firebase/auth'

type ContextType = {
    user: User | null
    initializing: boolean
}

export const UserContext = createContext<ContextType>({ user: null, initializing: true });

export function useUser() {
    const user = useContext(UserContext)
    return user
}

export const UserProvider = (props: any) => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState<User | null>(null)

    const onAuthStateChanged = (user: User | null) => {
        setUser(user);
        if (initializing) setInitializing(false);
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(onAuthStateChanged);
        return unsubscribe;
    }, [])

    return (
        <UserContext.Provider
            value={{
                user,
                initializing,
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};
