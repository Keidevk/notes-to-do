export function getCookie(cookiename) {
    let cookiestring=RegExp(cookiename+"=[^;]+").exec(document.cookie);
    return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
}
export async function onRequestNotes(setUserNotes){
    fetch('http://localhost:8080/api/notes',{
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
            await setUserNotes(array)
        })
    }).catch((error) => {
        console.error(error)
    })

}