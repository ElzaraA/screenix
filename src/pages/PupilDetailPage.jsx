import { useParams } from 'react-router-dom'
import { pupils as mockPupils, lessons as mockLessons } from '../data/mockData.js'
import  LessonCard  from '../components/LessonCard.jsx'
function PupilDetailPage() {
    const { id } = useParams()
    const pupil = mockPupils.find(p => p.id === Number(id))
    const pupilLessons = mockLessons.filter(l => l.pupilId === Number(id))
    if (!pupil){
        return <p>ученик не найден</p>
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