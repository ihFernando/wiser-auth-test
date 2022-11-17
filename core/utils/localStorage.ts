/**
 * @name setLocalStorage
 * @description Escreve em LocalStorage
 * @param key: Chave para salvar
 * @param value: Valor que será salvo
 * @return null
 */
export const setLocalStorage = (key: string, value: any) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    throw new Error('Não foi possível escrever em localStorage')
  }
}

/**
 * @name getLocalStorage
 * @description Busca no LocalStorage
 * @param key: Chave para buscar no LocalStorage
 * @return Item encontrado no LocalStorage de acordo com a chave solicitada
 */
export const getLocalStorage = (key: string) => {
  try {
    const item = JSON.parse(window.localStorage.getItem(key))
    return item
  } catch (error) {
    throw new Error('Não foi possível ler item em localStorage')
  }
}

/**
 * @name removeLocalStorage
 * @description Remove chave no LocalStorage
 * @param key: Chave para ser removida no LocalStorage
 * @return null
 */
export const removeLocalStorage = (key: string) => {
  try {
    window.localStorage.removeItem(key)
  } catch (error) {
    throw new Error('Não foi possível remover o item em localStorage')
  }
}

export default { setLocalStorage, getLocalStorage, removeLocalStorage }
