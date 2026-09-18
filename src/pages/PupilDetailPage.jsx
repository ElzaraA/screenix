import { useParams, useNavigate } from 'react-router-dom'
import {useState, useEffect } from 'react'
import {getPupilById} from '../api/pupils.js'
import {getLessons} from '../api/lessons.js'
import  LessonCard  from '../components/LessonCard.jsx'
import Button from '../components/Button.jsx' 
import {deletePupil} from '../api/pupils.js'
import {updatePupil} from '../api/pupils.js'

function PupilDetailPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [pupil, setPupil] = useState(null)
    const [loading, setLoading] = useState(true)
    const [pupilLessons, setPupilLessons] = useState([])
    const [isEditing, setIsEditing] = useState(false)
    const [editName, setEditName] = useState('')
    const [editSubject, setEditSubject] = useState('')
    const [editAge, setEditAge] = useState('')
    const [editPhone, setEditPhone] = useState('')
    const [editTelegram, setEditTelegram] = useState('')


    useEffect(() => {
        getPupilById(id)
            .then(data => {
            setPupil(data)
            setLoading(false)
            setIsEditing(false)
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
    function handleEditStart(){
        setEditName(pupil.name)
        setEditSubject(pupil.subject)
        setEditAge(pupil.age)
        setEditPhone(pupil.contacts.phone)
        setEditTelegram(pupil.contacts.telegram)
        setIsEditing(true)
    }
    async function handleSave(e){
        e.preventDefault()
        const pupilData = {
            name: editName,
            subject: editSubject,
            age: Number(editAge),
            contacts: {
                phone: editPhone,
                telegram: editTelegram
            }
        }
        await updatePupil(id, pupilData)
        setPupil(prev => ({...prev, ...pupilData}))
        setIsEditing(false)
    }
    return (
        <div>
            <h1>Информация об ученике</h1>
            {isEditing ?
            (<form onSubmit={handleSave}>
                <Button variant="primary" type="submit">Редактировать ученика</Button>
                <input value={editName} placeholder = "Имя" onChange={(e) => setEditName(e.target.value)} />
                <input value={editSubject} placeholder = "Предмет/цель занятий" onChange={(e) => setEditSubject(e.target.value)} />
                <input value={editAge} placeholder = "Класс/возраст" onChange={(e) => setEditAge(e.target.value)} />
                <input value={editPhone} placeholder = "Телефон" onChange={(e) => setEditPhone(e.target.value)} />
                <input value={editTelegram} placeholder = "Телеграм" onChange={(e) => setEditTelegram(e.target.value)} />
            </form> 
            ):(
            <p>{pupil.name} - {pupil.age} - {pupil.subject} - {pupil.contacts.telegram}</p>
            )}
            <div>
                <p>Уроки</p>
                {pupilLessons.map(lesson => (
                        <LessonCard key={lesson.id} lesson = {lesson}/>
                    ))}
            </div>
            <div>
                <Button variant="danger" onClick = {handleDelete}>Удалить</Button>
                <Button variant="secondary" onClick = {handleEditStart}>Редактировать</Button>
            </div>
        </div>
    )
}
export default PupilDetailPage