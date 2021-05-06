import styles from "../Styles/Forms.module.scss";
import React from "react";

export const TextArea =({input, meta, ...props})=>{

   const hasError = meta.touched && meta.error

    return (
        <div>
            <textarea {...input} className={hasError && styles.warning} placeholder='Введите сообщение'/>
            <div>
                {hasError && <div className={styles.error}>{meta.error}</div>}
            </div>
        </div>

        )
}