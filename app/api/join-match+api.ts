import { db } from "@/firebaseConfig"
import { MatchData as MatchData } from "@/functions/matches"
import { doc, runTransaction } from "firebase/firestore/lite"

export type ExpectedData = {
    userId: string
    matchId: string
}

export async function PUT(req: Request) {
    const { userId, matchId } = await req.json() as ExpectedData
    const matchDocRef = doc(db, 'shared_lists', matchId)

    try {
        await runTransaction(db, async (transaction) => {
            const matchDoc = await transaction.get(matchDocRef)
            if (!matchDoc.exists()) {
                throw "Shared list document with provided id does not exist"
            }

            const { users_invited } = matchDoc.data() as MatchData
            if (!users_invited.includes(userId)) {
                users_invited.push(userId)
                transaction.update(matchDocRef, { users_invited })
                return users_invited
            } else {
                return Promise.reject("User already registered in match")
            }
        })

        return Response.json({ success: true })
    } catch (error) {
        console.log(error)
        return Response.json({ success: false })
    }
}
