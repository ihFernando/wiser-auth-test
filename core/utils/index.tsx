export const REGEX = {
  EMAIL: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}

/**
 * @name onValidateEmail
 * @description Valida se o email inserido está no padrão certo
 * @param email
 * @return boolean
 */
export const onValidateEmail = (email: string) => REGEX.EMAIL.test(email)
