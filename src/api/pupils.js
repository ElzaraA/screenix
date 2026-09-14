const API_URL = import.meta.env.VITE_API_URL;

export async function getPupils(){
    const res = await fetch(`${API_URL}/pupils`)
    return res.json()
}
export async function getPupilById(id){
    const res = await fetch(`${API_URL}/pupils/${id}`)
    if (!res.ok){
        throw new Error('Ученик не найден')
    }
    return res.json()
}