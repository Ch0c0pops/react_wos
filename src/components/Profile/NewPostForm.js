import React from "react";
import {Form, Field} from 'react-final-form'
import {TextArea} from "../../FinalForm/CustomForms";
import {composeValidators, required, minLength} from "../../Validators/Validators";


const NewPostForm = (props) => {


    const onSubmit = (formData) => {
        props.addPostHandler(formData.NewPostMessage)
    }

    const minLength15 = minLength(15)

    return <Form
        onSubmit={onSubmit}

        render={({handleSubmit, form}) => (
            <form onSubmit={(event) => {
                handleSubmit(event)
                    // form.change("NewPostMessage", null)
                // form.touched = false
            }}>
                <Field
                    name="NewPostMessage"
                    component={TextArea}
                    validate={composeValidators(minLength15, required)}
                />
                <button type="submit">Submit</button>
            </form>
        )}


    />
}

export default NewPostForm