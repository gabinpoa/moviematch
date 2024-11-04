import { Text } from 'react-native';

type Props = {
    children: string,
    size?: 'large' | 'normal'
}

export default function Title({ children, size = 'normal' }: Props) {
    return (
        <Text
            className={`font-semibold text-neutral-600 ${size === 'normal' ? 'text-base' : 'text-lg'}`}
        >{children}</Text>
    );
}

