<script setup>
import { onMounted } from "vue";
import { useTodoStore } from "@/stores/todo.js"

defineEmits(['show_modal'])

const todoStore = useTodoStore()

onMounted(todoStore.getTodos)
</script>

<template>
  <li v-for="todo in todoStore.todos" :key="todo.id">
    <div class="item-content">
      <label>
        <input :checked="todo.completed_at" @click="todoStore.toggleTodo(todo.id)" type="checkbox" />
        <p :class="todo.completed_at ? 'line-through': ''">{{ todo.content }}</p>
      </label>
    </div>
    <div class="item-control">
      <a @click.prevent="$emit('show_modal')" href="#" class="edit">edit</a>
      <a @click.prevent="todoStore.removeTodo(todo.id)" href="#" class="delete">delete</a>
    </div>
  </li>
</template>
