const express = require('express');
const app = express();
const pupils = [
    {id: 1, name: "Камран", subject: "Подготовка к ОГЭ", age: 16, contacts:{phone:'+ 7 967 876 76 87', telegram: '@etwyw'}},
    {id: 2, name: "Маша", subject: "Подготовка к ЕГЭ", age: 18, contacts:{phone:'+ 7 934 543 33 37', telegram: '@lolo'}}
]
app.get('/pupils', (req, res) =>{
    res.json(pupils)
})
app.get('/lessons', (req, res) =>{
    res.json([
        {id: 1, pupilId: 1, topic: "Present simple", date: "10/09/2026", time: "10:00", duration: 60},
        {id: 2, pupilId: 2, topic: "Modal verbs", date: "08/09/2026", time: "19:00", duration: 60}
    ])
})
app.get('/pupils/:id', (req, res) =>{
    const {id} = req.params;
    const pupil = pupils.find(p => p.id === Number(id))
    if (!pupil){
        return res.status(404).json({error: 'Pupil not found'})
    }
    res.json(pupil)
})
app.listen(3001, () => console.log('Server started on port 3001'))