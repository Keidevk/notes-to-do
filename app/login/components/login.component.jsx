export default function LogInComponent({setUserLoggedIn}){
    
     async function onSubmitLogin(e){
        e.preventDefault();
        const formData = new FormData(e.target);
         await fetch('http://localhost:8080/api/login',{
            method: 'POST',
            mode:'cors',
            credentials:"include",
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body:JSON.stringify({
                email:formData.getAll("email")[0],
                password:formData.getAll("password")[0]
            })    
        }).then((e) => {
            if(e.status === 201){
                console.log('Login')
                onRequestAuthLogin();
            }else{
                console.error(e.statusText)
                alert('Login Error')
            }
        })      
    }
    
    async function onRequestAuthLogin(){
        fetch('http://localhost:8080/api/auth/token',{
            method: 'GET',
            mode:'cors',
            credentials:'include',
        }).then(async function response(res) {
            if(await res.ok){
                setUserLoggedIn(true)
            } else if(await res.status==401){
                console.log(res.status)
            }else{
                setUserLoggedIn(false)
            }
        })//res.ok ? setUserLoggedIn(true) : setUserLoggedIn(false)
    }

    return (<div className="flex justify-center">
        <form className="grid grid-rows-4 font-bold pl-11 py-8 rounded text-black shadow-lg w-2/5" onSubmit={onSubmitLogin}>
            <label className="text-white font-medium text-2xl" htmlFor="email">Email:</label>
            <input className="font-medium h-8 rounded-md w-5/6 outline-none" placeholder="Email" type="email" name="email" />
            <label className="text-white font-medium text-2xl my-1" htmlFor="password">Password:</label>
            <input className="font-medium h-8 mb-2 mt-1 rounded-md w-5/6 outline-none" placeholder="Password" type="password" name="password" />
            <input className="bg-orange-300 text-white mt-4 text-2xl font-medium relative bottom-0 left-20 rounded-md w-3/6" type="submit" value="Submit" />
        </form>
    </div>)
    }
