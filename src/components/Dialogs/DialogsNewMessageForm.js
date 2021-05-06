import React from "react";
import styles from '../../Styles/Forms.module.scss'
import {Form, Field} from 'react-final-form'
import {minLength, required, composeValidators} from '../../Validators/Validators'


const DialogsNewMessageForm = (props) => {

    const onSubmit = (formData) => {
        props.addNewMessageHandler(formData.DialogsNewMessage)
    }

    const minLength10 = minLength(10)


    return <Form
        onSubmit={onSubmit}

        render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>

                <Field
                    validate={composeValidators(minLength10, required)}
                    name="DialogsNewMessage"
                    render={({input, meta}) => (
                        <div>
                            <textarea {...input}  placeholder="Введите сообщение" className={meta.touched && meta.error && styles.warning}/>
                            {meta.touched && meta.error && <div className={styles.error}>{meta.error}</div>}
                        </div>
                    )}
                />
                <button type="submit">Добавить</button>
            </form>
        )}
    />
}

export default DialogsNewMessageForm
