import { Text } from 'react-native';

type Props = {
    children: string,
    size?: 'large' | 'normal'
}

export default function Title({ children, size = 'normal' }: Props) {
    return (
        <Text style={{
            fontSize: size == 'normal' ? 14 : 16,
            fontWeight: 'semibold',
        }}>{children}</Text>
    );
}

