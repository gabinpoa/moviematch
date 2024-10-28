import { Text } from 'react-native';

type Props = {
    children: string,
    size?: 'large' | 'normal'
}

export default function Subtitle({ children, size = 'normal' }: Props) {
    return (
        <Text style={{
            fontSize: size == 'normal' ? 13 : 15,
            fontWeight: 'normal',
            color: 'grey'
        }}>{children}</Text>
    );
}

