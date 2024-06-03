export default function SignInComponent(){
    async function onSubmitSignIn(e){
        e.preventDefault()
        const formData = new FormData(e.target)
        await fetch('http://localhost:8080/api/', {
            method: 'POST',
            mode:'cors',
            headers: new Headers({'content-type': 'application/json'}),
            body:JSON.stringify({
                name: formData.getAll("name")[0],
                lastname: formData.getAll("lastname")[0],
                email: formData.getAll("email")[0],
                password: formData.getAll("password")[0]
            })
        }).then(()=>{
            alert("user created successfully")
        })
    
    }
    return (
    <div className="flex justify-center">
        <form className="grid grid-rows-9 font-bold pl-11 py-8 rounded text-black shadow-lg w-2/5" onSubmit={onSubmitSignIn}>
            <label className="text-white font-medium text-2xl" htmlFor="name">Name:</label>
            <input className="font-medium h-8 rounded-md w-5/6 outline-none" placeholder="Name"  type="text" name="name" />
            <label className="text-white font-medium text-2xl" htmlFor="lastname">Last Name:</label>
            <input className="font-medium h-8 rounded-md w-5/6 outline-none" placeholder="Last name" type="text" name="lastname" />
            <label className="text-white font-medium text-2xl" htmlFor="email">Email:</label>
            <input className="font-medium h-8 rounded-md w-5/6 outline-none" placeholder="Email" type="email" name="email" />
            <label className="text-white font-medium text-2xl" htmlFor="password">Password:</label>
            <input className="font-medium h-8 rounded-md w-5/6 outline-none" placeholder="Password" type="password" name="password" />
            <input className="bg-orange-300 text-white mt-4 text-2xl font-medium relative bottom-0 left-20 rounded-md w-3/6" type="submit" value="Submit" />
        </form>
    </div>)
}