import { useParams, useNavigate } from 'react-router-dom'
import {useState, useEffect } from 'react'
import {getPupilById} from '../api/pupils.js'
import {getLessons} from '../api/lessons.js'
import  LessonCard  from '../components/LessonCard.jsx'
import Button from '../components/Button.jsx' 
import {deletePupil} from '../api/pupils.js'

function PupilDetailPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [pupil, setPupil] = useState(null)
    const [loading, setLoading] = useState(true)
    const [pupilLessons, setPupilLessons] = useState([])
    useEffect(() => {
        getPupilById(id)
            .then(data => {
            setPupil(data)
            setLoading(false)
        })
        .catch(() => {
            setPupil(null)
            setLoading(false)
        })
    },[id])
    useEffect(() =>{
        getLessons()
            .then (data => setPupilLessons(data.filter(lesson => lesson.pupilId === Number(id))))
    },[id])
    if (loading){
        return <p>Загрузка...</p>
    }
    if (!pupil){
        return <p>Ученик не найден</p>
    }
    async function handleDelete(){
        const confirmed = window.confirm('Вы уверены что хотите удалить ученика?')
        if (!confirmed){
            return
        }
        await deletePupil(id)
        navigate('/pupils')
        
        
    }
    return (
        <div>
            <h1>Информация об ученике</h1>
            <p>id: {id}</p>
            <p>{pupil.name} - {pupil.age} - {pupil.subject} - {pupil.contacts.telegram}</p>
            <div>
                <p>Уроки</p>
                {pupilLessons.map(lesson => (
                        <LessonCard key={lesson.id} lesson = {lesson}/>
                    ))}
            </div>
            <div>
                <Button variant="danger" onClick = {handleDelete}>Удалить</Button>
            </div>
        </div>
    )
}
export default PupilDetailPage