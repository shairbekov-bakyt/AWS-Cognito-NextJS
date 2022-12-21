import {Fragment, useState} from "react";
import {SignUp} from "../components/signUp/signUp";
import {SignIn} from "../components/signIn/signIn";

export default function Home() {
    const [isSignIn, setSignIn] = useState(false)

    return (
        <Fragment>
            <button onClick={() => setSignIn(true)}>SignIn ?</button>
            <button onClick={() => setSignIn(false)}>SignUp ?</button>
            {
                isSignIn ? <SignIn/> : <SignUp/>
            }
        </Fragment>
    )
}
