import {useState, useEffect} from 'react'
import {getLessons} from '../api/lessons.js'
import LessonCard from '../components/LessonCard.jsx'
function LessonPage(){
    const[lessons, setLessons] = useState([]);
    useEffect(()=>{
        getLessons()
            .then(data => setLessons(data))
    }, [])
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