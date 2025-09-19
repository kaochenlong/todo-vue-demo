<script setup>
import Login from "./components/users/Login.vue"
import SignUp from "./components/users/SignUp.vue"
import TaskInput from "./components/todos/TaskInput.vue"
import TodoItem from "./components/todos/TodoItem.vue"
</script>

<template>
  <header class="banner">
    <h1><a href="#todo" class="taskLink">TODO!</a></h1>
    <div class="subtitle">
      <p class="text">Simple and Studid TODO App</p>
      <p class="hidden text sm:block">
        powered by
        <a href="https://5xcampus.com" class="text-link" target="_blank">5xCampus</a>
        |
        <a href="https://todoo.5xcamp.us" class="text-link" target="_blank">API</a>
        |
        <a href="https://github.com/5xTraining/todoo-app" class="text-link" target="_blank">GitHub</a>
      </p>
    </div>
  </header>

  <main class="px-6 todo-app main">
    <header>
      <nav class="navbar">
        <a class="loginLink" href="#login">登入</a>
        <a class="signUpLink" href="#sign_up">註冊</a>
      </nav>
    </header>

    <section id="userSection">
      <Login />
      <SignUp />
    </section>

    <TaskInput />
  </main>

  <section class="todo-list">
    <ul class="items">
      <TodoItem />
    </ul>
  </section>
  <footer>
    <p>
      powered by
      <a href="https://5xcampus.com" class="underline">5XCAMPUS</a> | <a href="https://todoo.5xcamp.us" class="underline">API</a> |
      <a href="https://github.com/5xTraining/todoo-app" class="underline">SOURCE</a>
    </p>
  </footer>
</template>
