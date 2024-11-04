import Title from '@/components/Title'
import { SharedListDataWithId } from '@/functions/matches'
import { Link } from 'expo-router'

type Props = {
    data: SharedListDataWithId
}


export default function MatchItem({ data }: Props) {
    return (
        <Link
            href={{
                pathname: "/match/[id]",
                params: { id: data.id, title: data.title },
            }}
            className='border border-neutral-300 rounded h-20'
        >
            <Title>{data.title}</Title>
        </Link>
    )
}
