<template>
  <section id="signUpSection">
    <h1>註冊帳號</h1>
    <form id="signUpForm">
      <div class="field">
        <label>
          <h3>Email</h3>
          <input type="email" id="signUpEmail" autocomplete="off" spellcheck="false" placeholder="Email 信箱" />
        </label>
      </div>

      <div class="field">
        <label>
          <h3>暱稱</h3>
          <input type="text" id="signUpNickname" autocomplete="off" spellcheck="false" placeholder="要怎麼稱呼你呢？" />
        </label>
      </div>

      <div class="field">
        <label>
          <h3>密碼</h3>
          <input type="password" id="signUpPassword" autocomplete="off" spellcheck="false" placeholder="密碼，至少需要 6 個字" />
        </label>
      </div>

      <div class="items-center justify-between block sm:flex field">
        <button>註冊</button>
        <div class="text-xl text-gray-600">已經有帳號了？<a href="#" class="text-link loginLink">登入</a></div>
      </div>
    </form>
  </section>
</template>
