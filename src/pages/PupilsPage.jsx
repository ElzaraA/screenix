import PupilCard from '../components/PupilCard.jsx'
import {getPupils} from '../api/pupils.js'
import {useState, useEffect} from 'react'
function PupilsPage(){
    const[pupils, setPupils] = useState([]);
    useEffect(() =>{
        getPupils()
            .then(data => setPupils(data))
    }, [])
    return(
        <main style={{padding:'20px'}}>
            {pupils.map(pupil => (
                <PupilCard key={pupil.id} pupil = {pupil}/>
            ))} 
        </main>
    )
}
export default PupilsPage