import { defineStore } from 'pinia'
import { ref } from 'vue'

const count = defineStore('count', () => {

  const count = ref<number>(0)

  return { count }
})

export default count
