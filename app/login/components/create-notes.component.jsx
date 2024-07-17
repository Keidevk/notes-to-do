import { getCookie } from '../../functions/global-functions'
import { onRequestNotes } from '../../functions/global-functions';

export default function CreateNoteComponent({setUserNotesState}){
    async function onSubmitCreateNote(e){
        e.preventDefault();
        const formData =  new FormData(e.target);
        let userName = getCookie('user_name')
        let userId = getCookie('user_id')
        await fetch('http://localhost:8080/api/notes/create',{
            method: 'POST',
            mode:'cors',
            credentials:'include',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({
                name_note:formData.getAll('note_name')[0],
                text_note:formData.getAll('note_text')[0],
                user_note:userName,
                user_id:userId,
                finish:false
            })
        }).then(() => {
            onRequestNotes(setUserNotesState)
        })   
    }

    return(
        <div className="font-bold px-5 py-4 rounded shadow-lg w-2/5">
            <form className='grid m-5' onSubmit={onSubmitCreateNote}>
                <label className='text-xl font-bold my-2' htmlFor="note_name">note&apos;s name:</label>
                <input className='flex font-bold py-1 px-2 rounded  text-black placeholder-gray-600' type="text" name="note_name" placeholder="write here the note's name" />
                <label className='text-xl font-bold my-2' htmlFor="note_text">note&apos;s text:</label>
                <input className='fle font-bold py-1 px-2 rounded  text-black placeholder-gray-600' type="text" name="note_text" placeholder="write here note's content" />
                <input className="bg-orange-300 text-white mt-4 text-2xl font-medium relative bottom-0 left-1/4 rounded-md w-3/6" type="submit" value="Submit" />
            </form>
        </div>
    )
}