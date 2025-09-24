import { defineStore } from "pinia"
import { ref } from "vue"
import { axios } from "@/lib/http.js"

const useTodoStore = defineStore("todo", () => {
  const todos = ref([])
  const todo = ref({})

  async function getTodos() {
    const url = "https://todoo.5xcamp.us/todos"

    try {
      const { data } = await axios.get(url)
      todos.value = data.todos
    } catch (err) {
      console.log(err)
    }
  }

  async function addTodo(content) {
    todo.value = {
      id: null,
      content,
      completed_at: null,
    }

    todos.value.unshift(todo.value)

    // 打 API
    const url = "https://todoo.5xcamp.us/todos"

    const todoObj = {
      todo: { content },
    }

    try {
      const { data } = await axios.post(url, todoObj)
      const { id } = data
      todo.value.id = id
    } catch (err) {
      console.log(err)
    }
  }

  function removeTodo(id) {
    const idx = todos.value.findIndex((t) => t.id == id)

    if (idx >= 0) {
      todos.value.splice(idx, 1)
    }

    // 打 API
    const url = `https://todoo.5xcamp.us/todos/${id}`
    axios.delete(url)
  }

  function toggleTodo(id) {
    const todo = todos.value.find((t) => t.id == id)

    if (todo) {
      todo.completed_at = !todo.completed_at
    }

    // 打 API
    const url = `https://todoo.5xcamp.us/todos/${id}/toggle`
    axios.patch(url)
  }

  return { addTodo, getTodos, removeTodo, toggleTodo, todos }
})

export { useTodoStore }
