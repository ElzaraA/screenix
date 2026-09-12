import { pupils as mockPupils} from '../data/mockData.js'
import PupilCard from '../components/PupilCard.jsx'
import {useState} from 'react'
function PupilsPage(){
    const[pupils, setPupils] = useState(mockPupils);
    return(
        <main style={{padding:'20px'}}>
            {pupils.map(pupil => (
                <PupilCard key={pupil.id} pupil = {pupil}/>
            ))} 
        </main>
    )
}
export default PupilsPage