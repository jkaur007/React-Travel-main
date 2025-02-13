import './Nav.css'
import web from './assets/web.svg'
import logo from './assets/logo2.png'

export default function Nav(){
    return (
        <>
            <nav>
            <img src={logo} alt=""  className="logo"/>
                <img src={web} alt="" className='web'/>
               
                <h6>My Solo travel journal</h6>
            </nav>
        </>
    )
}