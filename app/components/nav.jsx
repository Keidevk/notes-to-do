"use client"
import Link from 'next/link'
async function Logout(e){
    fetch("http://localhost:8080/api/logout",{
        method:"GET",
        mode:"cors",
        credentials:"include"
    }).then(()=>{
        window.location.reload()
    })
}
export default function Nav ({Logged=false,LoginOrSign,LoginOrSignState,}){
    return (
    
    <nav className="grid grid-cols-2 text-center">
        {Logged ? 
        <div className='text-left'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={Logout}>Logout</button>
        </div>:
        <div className='text-left'>
            <Link id='logo' className=" text-orange-300 hover:text-orange-400 font-bold py-2 px-4" href="/">Notemaster</Link>
        </div>}
        {Logged ? 
        <div className='text-center'>
            <h1  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Create a note</h1>
        </div>:
        <div className='text-right mr-4 my-1'>
            <Link className='bg-orange-300 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded' onClick={()=> LoginOrSignState ? LoginOrSign(false) : LoginOrSign(true)} href="/login">Sign In or Login</Link>
        </div>}
    </nav>)
}