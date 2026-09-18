import {useState} from 'react'
import Button from '../components/Button.jsx'  
// import { pupils as mockPupils} from '../data/mockData.js'
// import PupilCard from '../components/PupilCard.jsx'
import { addPupil } from '../api/pupils.js'
function MainPage(){
    const [name, setName ] = useState ('')
    const [subject, setSubject] = useState('')
    const [age, setAge] = useState('')
    const [phone, setPhone] = useState('')
    const [telegram, setTelegram] = useState('')
    
    function handleSubmit(e){
    e.preventDefault()
    if (!name.trim()){
        return
    }
    const pupilData = {
        name: name,
        subject: subject,
        age: Number(age),
        contacts:{
            phone: phone,
            telegram: telegram
        }
    }
    addPupil(pupilData)
        .then(() => {setName('')
            setSubject('')
            setAge('')
            setPhone('')
            setTelegram('')
        }) 
}
    return(
        <main style={{padding:'20px'}}>     
            <h1> Screenix</h1>
            <p>Добро пожаловать, Эльзара!</p>
        
            <div style = {{}}>
                <form onSubmit={handleSubmit}>
                    <Button variant="primary" type="submit">Добавить ученика</Button>
                    <input value={name} placeholder = "Имя" onChange={(e) => setName(e.target.value)} />
                    <input value={subject} placeholder = "Предмет/цель занятий" onChange={(e) => setSubject(e.target.value)} />
                    <input value={age} placeholder = "Класс/возраст" onChange={(e) => setAge(e.target.value)} />
                    <input value={phone} placeholder = "Телефон" onChange={(e) => setPhone(e.target.value)} />
                    <input value={telegram} placeholder = "Телеграм" onChange={(e) => setTelegram(e.target.value)} />
                </form>
                <Button variant="secondary">Отмена</Button>
                <Button variant="danger">Удалить</Button>
            </div>
        </main>
    )
}

export default MainPage