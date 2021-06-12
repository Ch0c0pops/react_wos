import React from "react";
import {Form, Field} from 'react-final-form'

const LoginForm = (props) => {

    const onSubmit = (e) => {
        props.loginThunk(e)
    }

    const validate = (e) => {
        let errors = {}
        if (e.password && e.password.length < 5) {
            errors.password = 'Пароль должен состоять минимум из 5 символов'
        }

        return errors
    }

    return (
        <Form onSubmit={onSubmit}
              validate={validate}
              render={({handleSubmit}) => (

                  <form onSubmit={handleSubmit}>

                      <label>Выполнить вход</label>
                      <div>
                          <Field
                              name="email"
                              render={({input, meta}) => (
                                  <div>
                                      <input {...input} placeholder={'email'} />
                                      {meta.touched && meta.error && <div>{meta.error}</div>}
                                  </div>
                              )}
                          />
                      </div>


                      <div>
                          <Field
                              name="password"
                              type="password"
                              render={({input, meta}) => (
                                  <div>
                                      <input {...input} placeholder={'password'}/>
                                      {meta.touched && meta.error && <div>{meta.error}</div>}
                                  </div>
                              )}
                          />
                      </div>
                      <div>
                          <Field name='rememberMe'
                                 component='input'
                                 type='checkbox'

                          />
                      </div>


                      <button type="submit">Submit</button>
                  </form>

              )}
        />
    )
}

export default LoginForm