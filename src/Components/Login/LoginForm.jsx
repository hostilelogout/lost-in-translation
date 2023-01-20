import { useForm } from 'react-hook-form'

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

    const onSubmit = data => console.log(data);

    console.log(errors);
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <input type="text"
                placeholder="What's your name?" 
                {...register("username",requirements)}></input>               
            </fieldset>

            <button type="submit" className="btn btn-primary">Create User</button>
        </form>
    )
}

export default LoginForm

