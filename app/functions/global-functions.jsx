export function getCookie(cookiename) {
    let cookiestring=RegExp(cookiename+"=[^;]+").exec(document.cookie);
    return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
}
export async function onRequestNotes(setUserNotesState){
    fetch(process.env.HOST+'/api/notes',{
        method:'GET',
        mode:'cors',
        credentials:'include',
    })
    .then(async r => { await r.json()
        .then(async data => { 
            const array = [];
            data.map( data => {
                array.push(data)
            })
            await setUserNotesState(array)
        })
    }).catch((error) => {
        console.error(error)
    })
}

// export function AuthLogged(setUserLoggedState) {
//     fetch(`http://localhost:8080/api/auth/token`, {
//         method: 'GET',
//         mode: 'cors',
//         credentials: 'include',
//     })
//     .then((response) => {
//         if (response.ok) {
//             setUserLoggedState(true);
//         } else {
//             // No establezcas el estado si no está autorizado
//             setUserLoggedState(false);
//         }
//     })
//     .catch((error) => {
//         console.error('Error al obtener el token de autenticación:', error);
//     });
// }


export function AuthLogged (setUserLoggedState){
    fetch(process.env.HOST+`/api/auth/token`,{
        method: 'GET',
        mode:'cors',
        credentials:'include',
    })
    .then((e) => {
        document.cookie.toString().includes('Logged_In') ? setUserLoggedState(true) : setUserLoggedState(false)
    }).catch((e) =>{
        if (e.response || e.response.status === 401) {
          } 
        else {
            // console.log(e);
          } 
    })}  
