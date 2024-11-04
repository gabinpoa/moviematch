import MatchesList from "@/components/matches/list";
import NewMatch from "@/components/matches/new";
import { View } from "react-native";

export default function Index() {
    return (
        <View>
            <NewMatch />
            <MatchesList />
        </View>
    )
}
