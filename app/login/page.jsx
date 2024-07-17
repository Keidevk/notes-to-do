"use client"
import { useEffect, useState, createContext } from "react";
import FooterPage from "../components/footerpage";
import Nav from "../components/nav";

import CreateNoteComponent from "./components/create-notes.component";
import SignInComponent from "./components/signIn.component";
import LogInComponent from "./components/login.component";
import GetNotesComponent from "./components/get-notes.component";

import { onRequestNotes, AuthLogged} from "../functions/global-functions";

export const MenuContext = createContext();

export default function Login(){
    const [userLoggedState,setUserLoggedState] = useState(null);
    const [userNotesState,setUserNotesState] = useState([]);
    const [loginOrSigninState,setLoginOrSigninState] = useState(false)

    useEffect(()=>{
        AuthLogged(setUserLoggedState)
    },[])
    
    useEffect(() => {
        if(userLoggedState === true){
            onRequestNotes(setUserNotesState)
        }},[userLoggedState]);

    return (
    <>
        <MenuContext.Provider value={{setLoginOrSigninState,setUserLoggedState}}>
            <Nav loginOrSigninState={loginOrSigninState} userLoggedState={userLoggedState}></Nav>
        <main>
            <div>
                {
                    userLoggedState === true && userLoggedState != null &&
                    <>       
                        {/* <h3>Status:Logged</h3> */}
                        <div className='flex justify-center'>
                            <CreateNoteComponent setUserNotesState={setUserNotesState}/>
                        </div>
                        <div id="getNotes" className='mt-8 border-orange-300 border-t-2 border-solid '>
                            <GetNotesComponent setUserNotesState={setUserNotesState} userNotes={userNotesState}/>
                        </div>
                    </>
                }
                {
                    userLoggedState === false && userLoggedState != null && 
                    <>
                        {loginOrSigninState == true ? <SignInComponent/> : <LogInComponent setUserLoggedState={setUserLoggedState}/>}  
                    </>
                }
                {
                    userLoggedState == null && (
                    <div className="flex items-center justify-center h-screen relative -top-20">
                        <div className="animate-spin rounded-full h-16 w-16 border-solid border-t-4 border-orange-300"></div>
                    </div>)
                }   
                
            </div>
        </main>
    <FooterPage></FooterPage>
    </MenuContext.Provider>
    </>)
}