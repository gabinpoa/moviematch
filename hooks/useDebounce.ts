import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T, delay: number, conditioner?: (val: T) => boolean) {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        if (!conditioner || conditioner(value)) {
            const handler = setTimeout(() => {
                setDebouncedValue(value)
            }, delay);
            return () => {
                clearTimeout(handler)
            }
        }
    }, [value, delay])

    return debouncedValue
}
