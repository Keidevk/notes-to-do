import RemoveButton from '../components/delete-note.component';
export default function GetNotesComponent({setUserNotes,userNotes}) {
    return(
    <>
        <h3>Notes</h3>
        <div>{ userNotes && userNotes.map((data,index) => onShowNotes(data,setUserNotes))}</div>
    </>)
}

function onShowNotes(data, setUserNotes){
    return (
        <ul key={data._id}>
            <li>user&apos;s name: {data.user_note}</li>
            <li>note&apos;s name: {data.name_note}</li>
            <li>note&apos;s content: {data.text_note}</li>
            <li>Finished: {data.finish ? 'yes':'no'}</li>
        <RemoveButton setUserNotes={setUserNotes} id={data._id}/></ul>)
}