import { getCookie } from '../../functions/global-functions'
import { onRequestNotes } from '../../functions/global-functions';

export default function CreateNoteComponent({setUserNotes}){
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
            onRequestNotes(setUserNotes)
        })   
    }

    return(
        <form onSubmit={onSubmitCreateNote}>
            <label htmlFor="note_name">note&apos;s name:</label>
            <input type="text" name="note_name" placeholder="write here the note's name" />
            <label htmlFor="note_text">note&apos;s text:</label>
            <input type="text" name="note_text" placeholder="write here note's content" />
            <input type="submit" value="submit" />
        </form>
    )
}