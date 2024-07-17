"use client"
import Link from 'next/link';
import { useContext, useEffect} from "react";
import { MenuContext } from '../login/page';
async function Logout(){
    fetch("http://localhost:8080/api/logout",{
        method:"GET",
        mode:"cors",
        credentials:"include"
    }).then(()=>{
        window.location.reload()
    })
}

export default function Nav ({userLoggedState, loginOrSigninState}) { 

    // useEffect(()=>{
    //     console.log(setState) 
    // },[userLoggedState])
    const setState = useContext(MenuContext);
    const managerChange = (value) => {
    try{
        setState.setLoginOrSigninState (value)
    }catch{((err) => console.log(err))}
    } 
    return (
    <>
        {userLoggedState ?
        <nav className="grid grid-cols-2 text-center"> 
            <div className='flex justify-start text-left'>
                <Link id='logo' className=" text-orange-300 hover:text-orange-400 font-bold py-2 px-4" href="/">Notemaster</Link>
            </div>
            <div className='text-left flex justify-end mr-8'>
                <button className='flex bg-orange-300 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded ' onClick={Logout}>Logout</button>
            </div>
        </nav>:
        <nav className="grid grid-cols-2 text-center">
            <div className='text-left'>
                <Link id='logo' className=" text-orange-300 hover:text-orange-400 font-bold py-2 px-4" href="/">Notemaster</Link>
            </div>
            <div className='text-right mr-4 my-1'>
                <Link className="bg-orange-300 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded" onClick={() => {
                        try {
                        setState.setLoginOrSigninState(!loginOrSigninState)
                        }catch (e) {
                            // console.log(e)
                        }
                    }
                } href="/login"> Sign In or Login</Link>
            </div>
        </nav>}
    </>)
}