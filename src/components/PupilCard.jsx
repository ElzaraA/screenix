import {Link} from 'react-router-dom'
function PupilCard({pupil}){
    return(
        <Link to ={`/pupils/${pupil.id}`}>
            <div style={{border:'1px solid black', padding:'12px',marginBottom:'8px'}}>
                <h3>{pupil.name}</h3>
                <p>{pupil.subject} - {pupil.age}</p>
            </div>
        </Link>
        )
}
export default PupilCard;