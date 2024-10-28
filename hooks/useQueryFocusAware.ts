import { useFocusEffect } from 'expo-router'
import { useCallback, useRef } from 'react'

export function useQueryFocusAware() {
    const focusedRef = useRef(true)

    useFocusEffect(
        useCallback(() => {
            focusedRef.current = true

            return () => {
                focusedRef.current = false
            }
        }, []),
    )

    return () => focusedRef.current
}
