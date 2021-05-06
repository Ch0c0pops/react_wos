export const required = value => (value ? undefined : 'Сообщение не должно быть пустым')

export const minLength = (length) => (value) => {
    if (value) {
        return  value.length < length ? `сообщение должно содержать более ${length} символов` : undefined
    }
}

export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)