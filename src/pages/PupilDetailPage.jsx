import { useParams } from 'react-router-dom'
import {useState, useEffect } from 'react'
import {getPupilById} from '../api/pupils.js'
import {getLessons} from '../api/lessons.js'
import  LessonCard  from '../components/LessonCard.jsx'
function PupilDetailPage() {
    const { id } = useParams()
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
        </div>
    )
}
export default PupilDetailPage