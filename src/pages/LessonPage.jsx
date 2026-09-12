import {useState} from 'react'
import {lessons as mockLessons} from '../data/mockData.js'
import LessonCard from '../components/LessonCard.jsx'
function LessonPage(){
    const[lessons, setLessons] = useState(mockLessons);
    return(
        <main style={{padding:'20px'}}>
            <h1>Мои уроки</h1>
            <div style={{ 
                marginTop: '20px', 
                padding: '20px', 
                border: '1px dashed gray', 
                borderRadius: '8px' 
            }}>
                {lessons.map(lesson => (
                    <LessonCard key={lesson.id} lesson = {lesson}/>
                ))}
            </div>
        </main>
    )
}
export default LessonPage