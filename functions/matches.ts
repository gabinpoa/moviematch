import { auth, db } from "@/firebaseConfig";
import { DocumentData, addDoc, collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore/lite";

export interface SharedListData extends DocumentData {
    title: string,
    users_invited: string[]
}

export interface SharedListDataWithId extends SharedListData {
    id: string
}

export async function getUserMatchesLists() {
    if (!auth.currentUser) {
        throw "Cannot retrieve match lists because is not authenticated"
    }
    const queryRef = query(
        collection(db, 'shared_lists'),
        where(
            'users_invited',
            'array-contains',
            auth.currentUser.uid
        )
    )

    const querySnapshot = await getDocs(queryRef)

    return querySnapshot.docs.map(doc => { return { ...doc.data(), id: doc.id } as SharedListDataWithId })
}

export interface MatchData extends SharedListDataWithId {
    movies: MovieMatchData[]
}

export async function getMatch(matchId: string): Promise<MatchData> {
    const docRef = doc(db, 'shared_lists', matchId)
    const docSnap = await getDoc(docRef)

    const moviesCollRef = collection(docRef, 'movies')
    const moviesSnapshot = await getDocs(moviesCollRef)

    if (!docSnap.exists()) {
        throw "Match not found"
    }

    return {
        id: docSnap.id,
        movies: moviesSnapshot.docs.map(doc => doc.data() as MovieMatchData),
        ...docSnap.data() as SharedListData
    }
}

export async function createMatchList(title: string) {
    if (!auth.currentUser) {
        throw "Cannot create match list because is not authenticated"
    }

    const data: SharedListData = {
        title,
        users_invited: [auth.currentUser.uid]
    }

    return (await addDoc(collection(db, 'shared_lists'), data)).id
}

export type MovieMatchData = {
    original_language: string
    overview: string
    poster_path: string | null
    release_year: string
    title: string
    vote_average: number
    user_swipe: {
        swipe_right: boolean
        user_id: string
    }[]
}

export async function addMovieToMatch(matchId: string, movieId: string, movieData: MovieMatchData) {
    if (!auth.currentUser) {
        throw "Cannot add movie to list because is not authenticated"
    }

    const listDocRef = doc(db, 'shared_lists', matchId)
    const movieCollRef = collection(listDocRef, 'movies')
    const movieDocRef = doc(movieCollRef, movieId)
    await setDoc(movieDocRef, movieData)
}
