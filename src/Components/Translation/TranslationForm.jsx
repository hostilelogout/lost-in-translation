import { useState } from 'react';
import { useForm } from 'react-hook-form'

const requirements = {
    required: true,
    pattern: /^[A-Za-z\s]+$/
}

const TranslationForm = () => {
    const {
        register, 
        handleSubmit, 
        // formState: { errors } 
    } = useForm();
    const [translation, setTranslation] = useState(false)

    const onSubmit = (data) => {     
        // console.log(data)

        //TODO: POST translation

        setTranslation(() => {
            const sentence = data.inputText.toLowerCase()
            const signs = []
            for (const letter of sentence) {
                if (letter !== " ") {
                    console.log(letter)
                    const sign = require("./../../images/signs/" + letter + ".png")
                    signs.push(<img key={signs.length+1} style={{maxWidth:60+"px"}} src={sign} />)
                }
            }
            return signs
        })
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Input translation here..." aria-label="Input translation here" aria-describedby="basic-addon2" {...register("inputText", requirements) }></input>
                <div className="input-group-append">
                    <button type="submit" className="btn btn-outline-secondary">Translate</button>
                </div>
            </div>
            { translation && <div className="card"><div className="card-body">{translation}</div></div> }
        </form>
    )
}

export default TranslationForm