import { useForm } from 'react-hook-form'
import { localSave, readFromLocal } from '../LocalStorage/internalStorage';
import { CreateUser } from '../User/CreateUser';

const requirements = {
    required: true,
    minLength: 3
}

const LoginForm = () => {
    const {
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();

    const onSubmit = (data) => {     
        console.log(data)
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="What's your name?" aria-label="What's your name?" aria-describedby="basic-addon2" {...register("username",requirements) }></input>
                <div className="input-group-append">
                    <button type="submit" className="btn btn-outline-secondary">Create User</button>
                </div>
            </div>
        </form>
    )
}

export default LoginForm

