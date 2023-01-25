import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { patchTranslations } from '../Fetch_API/Patch';

//Make input required.
//Input must be letters and spaces.
const requirements = {
    required: true,
    pattern: /^[A-Za-z\s]+$/
}

//Component for the main translation page.
//Convert and display sign-language version of input.
//Save input as translation in API.
const TranslationForm = () => {
    const {
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    const [translation, setTranslation] = useState(false)

    //Handle translate event
    //Save translation in API.
    //Create list of sign images from input for display.
    //Set new translation in state.
    const onSubmit = (data) => {     
        patchTranslations(data.inputText, true)

        setTranslation(() => {
            const sentence = data.inputText.toLowerCase()
            const signs = []
            for (const letter of sentence) {
                if (letter !== " ") {
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