import { getCookie,onRequestNotes } from '../../functions/global-functions'
export default function RemoveButton({id,setUserNotesState}){
    async function removeNote(){
        console.log(getCookie('user_id'),id);
        await fetch(process.env.HOST+`/api/notes/${id}`,{
            method: 'DELETE',
            mode: 'cors',
            credentials:'include',
        }).then(()=>{onRequestNotes(setUserNotesState)})
    }
    return (<button className="bg-orange-300 text-white mt-4 text-2xl font-medium relative bottom-0 left-20 rounded-md w-3/6" onClick={removeNote}>Remove</button>)
}