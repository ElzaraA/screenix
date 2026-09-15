import {useState} from 'react'
import Button from '../components/Button.jsx'  
// import { pupils as mockPupils} from '../data/mockData.js'
// import PupilCard from '../components/PupilCard.jsx'

function MainPage(){
    const [name, setName ] = useState ('')
    function handleSubmit(e){
    e.preventDefault()
    if (!name.trim()){
        return
    }
    
    fetch ('http://localhost:3001/pupils',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name: name})
    })
        .then(res => res.json())
        .then(() => setName(''))
}
    return(
        <main style={{padding:'20px'}}>     
            <h1> Screenix</h1>
            <p>Добро пожаловать, Эльзара!</p>
        
            <div style = {{}}>
                <form onSubmit={handleSubmit}>
                    <Button variant="primary" type="submit">Добавить ученика</Button>
                    <input value={name} onChange={(e) => setName(e.target.value)} />
                </form>
                <Button variant="secondary">Отмена</Button>
                <Button variant="danger">Удалить</Button>
            </div>
        </main>
    )
}

export default MainPage