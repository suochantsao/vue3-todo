<template>
  <div class="todo-container">
    <nav>
      <img class="logo-img" src="@/assets/img/logo_lg.png" alt="LOGO" />
      <span class="logout-btn" @click="toLoginPage">登出</span>
    </nav>
    <main>
      <Input :input-data="todoInputData" />
      <div class="list-section">
        <div class="non-data-block">
          <span>目前尚無待辦事項 </span>
          <img src="@/assets/img/empty.png" alt="" />
        </div>
      </div>
    </main>
  </div>
</template>
<script>
// Component

import Input from "@/components/Input";

// Methods
import { useRouter } from "vue-router";
import { ref } from "vue";

const todoInputData = ref({
  todoIcon: true,
});

export default {
  name: "TodoList",
  components: { Input },
  setup() {
    const router = useRouter();
    const toLoginPage = () => {
      router.push("/auth/login");
    };
    return {
      toLoginPage,
      todoInputData,
    };
  },
};
</script>
<style lang="scss" scoped>
.todo-container {
  width: 100%;
  padding: 0 1.5rem;
  height: 100vh;
  max-height: -webkit-fill-available;

  nav {
    margin-bottom: 1rem;
    padding-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 70%;
    }
    .logout-btn {
      cursor: pointer;
      font-weight: 400;
    }
  }
  main {
    margin: 0 0.1rem;
  }
  .list-section {
    display: flex;
    justify-content: center;
    .non-data-block {
      display: flex;
      flex-direction: column;
      justify-content: center;
      span {
        text-align: center;
        margin: 2rem 0 1rem 0;
      }
    }
  }
  @include pc-width {
    background: linear-gradient(
      172.7deg,
      $primary-yellow 5.12%,
      $primary-yellow 53.33%,
      $primary-yellow 53.44%,
      #ffffff 53.45%,
      #ffffff 94.32%
    );
  }
}
</style>
