import RemoveButton from '../components/delete-note.component';
export default function GetNotesComponent({setUserNotesState,userNotes}) {
    return(
    <>
        <div>{ userNotes && userNotes.map((data,index) => onShowNotes(data,setUserNotesState))}</div>
    </>)
}

function onShowNotes(data, setUserNotesState){
    return (
        <>
            <ul className='grid grid-rows-4 font-bold pl-7 py-8 rounded shadow-lg w-80 mr-4' key={data._id}>
                <li>user&apos;s name: {data.user_note}</li>
                <li>note&apos;s name: {data.name_note}</li>
                <li>note&apos;s content: {data.text_note}</li>
                <li>Finished: {data.finish ? 'yes':'no'}</li>
                <RemoveButton setUserNotesState={setUserNotesState} id={data._id}/>
            </ul>
        </>)
}