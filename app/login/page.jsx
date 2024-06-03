"use client"
import { useEffect, useState } from "react";
import FooterPage from "../components/footerpage";
import Nav from "../components/nav";

import CreateNoteComponent from "./components/create-notes.component";
import SignInComponent from "./components/signIn.component";
import LogInComponent from "./components/login.component";
import GetNotesComponent from "./components/get-notes.component";

import { onRequestNotes } from "../functions/global-functions";


export default function Login(){
    const [userLoggedState,setUserLoggedState] = useState(false);
    const [userNotesState,setUserNotesState] = useState([]);
    const [userLoginOrSigninState,setUserLoginOrSigninState] = useState(false)

    useEffect(()=>{
        fetch(`http://localhost:8080/api/auth/token`,{
            method: 'GET',
            mode:'cors',
            credentials:'include',
        }).then(() => {
            document.cookie.toString().includes('Logged_In') && setUserLoggedState(true)
        });
    },[])
    
    useEffect(() => {if(userLoggedState === true){onRequestNotes(setUserNotesState)}},[userLoggedState]);

    return (
    <>
    <Nav LoginOrSignState={userLoginOrSigninState} LoginOrSign={setUserLoginOrSigninState} Logged={userLoggedState}></Nav>
    <main>
        <div>
            {userLoggedState === false ? 
            <>
                {userLoginOrSigninState === false ? <SignInComponent/> : <LogInComponent setUserLoggedIn={setUserLoggedState}/>}  
            </> :
            <>
                <h3>Status:Logged</h3>
                <CreateNoteComponent setUserNotes={setUserNotesState}/>
                <GetNotesComponent setUserNotes={setUserNotesState} userNotes={userNotesState}/>
            </>}
        </div>
    </main>
    <FooterPage></FooterPage>
    </>)
}