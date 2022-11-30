import { acceptHMRUpdate, defineStore } from 'pinia'

export const testStore = defineStore('testState', () => {
  const token = ref<string>('')

  function setToken(val: string) {
    token.value = val
  }

  return {
    token,
    setToken,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(testStore, import.meta.hot))
