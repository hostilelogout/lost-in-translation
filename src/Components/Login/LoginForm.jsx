import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../Context/UserContext';
import { localSave, readFromLocal, readLocal } from '../LocalStorage/internalStorage';
import { getUser, loginUser } from '../User/User';

const requirements = {
    required: true,
    minLength: 3
}

const LoginForm = () => {

    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const {user,setUser} = useUser()

    useEffect(() => {
        if(user !== null){
            navigate('Translation')
        }
    }, [ user, navigate ])

    const onSubmit = async (data) => { 
       
        setLoading(true)

        const newUser = await loginUser(data.username)

        if (newUser !== null && newUser !== undefined){
            setUser(newUser)
            setLoading(false)
        }
        
        
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="What's your name?" aria-label="What's your name?" aria-describedby="basic-addon2" {...register("username",requirements) }></input>
                <div className="input-group-append">
                    <button type="submit" disabled={loading} className="btn btn-outline-secondary">Create User</button>                   
                </div>
            </div>
            {loading && <p>Logging in...</p>}
        </form>
    )
}

export default LoginForm

