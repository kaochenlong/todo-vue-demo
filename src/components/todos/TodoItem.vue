<script setup>
import { onMounted, useTemplateRef } from "vue";
import { useTodoStore } from "@/stores/todo.js"

const dialog = useTemplateRef('dialog')
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
      <a @click.prevent="dialog.showModal" href="#" class="edit">edit</a>
      <a @click.prevent="todoStore.removeTodo(todo.id)" href="#" class="delete">delete</a>
    </div>
  </li>

  <dialog ref="dialog" class="modal">
    <div class="modal-box">
      <h3 class="text-lg font-bold">更新</h3>
      <p class="py-4">
        <input type="text" class="input w-full"
      </p>
      <div class="modal-action">
        <form method="dialog" class="flex gap-2">
          <a href="#" class="btn btn-success">更新</a>
          <button class="btn">取消</button>
        </form>
      </div>
    </div>
  </dialog>
</template>
