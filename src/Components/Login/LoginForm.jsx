import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { readFromLocal } from '../LocalStorage/internalStorage';
import { createUser } from '../User/CreateUser';
import { getUser } from '../User/User';

const requirements = {
    required: true,
    minLength: 3
}

const LoginForm = () => {

    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    
    const onSubmit = async (data) => { 

        setLoading(true)

        if(readFromLocal(data.username) === true){
            //todo login
            navigate('Translation')
            setLoading(false)      
            return
        }

        if (await getUser(data.username) === true){
            //todo login
            navigate('Translation')
            setLoading(false)  
            return
        }

        else {
            // create user            
            await createUser(data.username)
            navigate('Translation')
            setLoading(false)
            return             
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

