import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUser } from '../../Context/UserContext';
import { deleteLocal } from '../LocalStorage/internalStorage';

const headerlogo = require("./../../images/headerlogo.png")
const dropdownImg = require("./../../images/Logo-Hello.png")

const HeaderForm = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const {handleSubmit } = useForm()
    const {user,setUser} = useUser()

    useEffect(() => {
        if(user === null){
            navigate('/')  
        }
    }, [ user, navigate ])

    const onSubmit = () => {
        deleteLocal()
        setUser(null)
    }
    
    const currentPath = () => {
        
        if (location.pathname === '/Translation'){
            return 'Profile'
        }
        else if (location.pathname === '/Profile'){
            return 'Translation'
        }
       
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <header className='px-3 py-2 text-bg-dark'>
                <div className='container'>
                    <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
                        <img className="bi me-2" width={"50px"} height={"50px"} src={headerlogo} alt="Header Logo"></img>
                        <span className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none fs-4">Lost in TranSlation</span>
                        <ul className='nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small'>
                            <li>
                            <a href={currentPath()} className='nav-link text-secondary text-white'>{currentPath()}</a>
                            </li>
                        </ul>
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-outline-secondary text-white" hidden={user === null}>Logout</button>
                        </div>
                    </div>
                </div>
            </header>
        </form>
    )
}

export default HeaderForm