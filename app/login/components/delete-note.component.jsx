import { getCookie,onRequestNotes } from '../../functions/global-functions'
export default function RemoveButton({id,setUserNotes}){
    async function removeNote(){
        console.log(getCookie('user_id'),id);
        await fetch(`http://localhost:8080/api/notes/${id}`,{
            method: 'DELETE',
            mode: 'cors',
            credentials:'include',
        }).then(()=>{onRequestNotes(setUserNotes)})
    }
    return (<><button onClick={removeNote}>Remove</button></>)
}