import { Text } from 'react-native';

type Props = {
    children: string,
    size?: 'large' | 'normal'
}

export default function Subtitle({ children, size = 'normal' }: Props) {
    return (
        <Text
            className={`font-light text-neutral-700 ${size === 'normal' ? 'text-base' : 'text-lg'}`}
        >{children}</Text>
    );
}

