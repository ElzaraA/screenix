function LessonCard({lesson}){
    return(
        <div style={{border:'1px solid black', padding:'12px',marginBottom:'8px'}}>
            <h3>{lesson.id}</h3>
                <p>{lesson.topic} - {lesson.time} - {lesson.duration}</p>
        </div>
    )
}
export default LessonCard;