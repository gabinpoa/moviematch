import { auth } from "@/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { FieldValues } from "react-hook-form";

export async function register({ email, password, passwordConfirm }: FieldValues) {
    try {
        if (password != passwordConfirm) {
            throw "Passwords don't match";
        }
        await createUserWithEmailAndPassword(auth, email, password)
    } catch (err: any) {
        throw err.message ? err.message : `${err}`;
    }
}

export async function login({ email, password }: FieldValues) {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (err: any) {
        throw err.message ? err.message : `${err}`;
    }
}
