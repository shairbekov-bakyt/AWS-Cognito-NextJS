import { useState} from "react";
import {SignUp} from "../components/signUp/signUp";
import {SignIn} from "../components/signIn/signIn";

export default function Home() {
    const [isSignIn, setSignIn] = useState(false)

    return (
        <div style={{paddingTop: "50px", display:'flex', alignItems:'center', flexDirection:'column'}}>
            <div style={{display:'flex',gap: '20px'}}>
            <button style={{fontSize: '18px', padding: '4px 10px', border: '2px solid gray'}}
                    onClick={() => setSignIn(true)}>SignIn
            </button>
            <button style={{fontSize: '18px', padding: '4px 10px', border: '2px solid gray'}}
                    onClick={() => setSignIn(false)}>SignUp
            </button>
            </div>

            {
                isSignIn ? <SignIn/> : <SignUp/>
            }
        </div>
    )
}
