import {Link} from 'react-router-dom'
function Navbar(){
    return(
        <nav style = {{padding: '15px 20px', borderBottom: '1px solid #ddd'}}>
            <Link to="/" style={{color: 'black', marginRight: '20px'}}>Главная</Link>
            <Link to="/lessons" style={{color: 'black'}}>Уроки</Link>
            <Link to="/pupils" style={{color: 'black'}}>Ученики</Link>
        </nav>
    )
}
export default Navbar;