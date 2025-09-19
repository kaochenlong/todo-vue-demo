<template>
  <section id="loginSection">
    <h1>登入</h1>
    <form id="loginForm">
      <div class="field">
        <label>
          <h3>Email</h3>
          <input type="email" id="loginEmail" autocomplete="off" spellcheck="false" placeholder="Email 信箱" />
        </label>
      </div>

      <div class="field">
        <label>
          <h3>密碼</h3>
          <input type="password" id="loginPassword" autocomplete="off" spellcheck="false" placeholder="密碼，至少需要 6 個字" />
        </label>
      </div>

      <div class="items-center justify-between block sm:flex field">
        <button>登入</button>
        <div class="text-xl text-gray-600">還沒有帳號嗎？<a href="#" class="text-link signUpLink">註冊</a>一個吧！</div>
      </div>
    </form>
  </section>
</template>
