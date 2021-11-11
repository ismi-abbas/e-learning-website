import React from 'react'
import FormSignUp from './FormSignUp'
import { useState } from 'react'
import FormSuccess from './FormSuccess'


const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <div>
            <span className="close-btn">X</span>
            {/* Close button */}
            {!isSubmitted ? (<FormSignUp submitForm={submitForm} />) : <FormSuccess />}
        </div>
    )
}

export default Form;
