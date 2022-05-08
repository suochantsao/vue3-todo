<template>
  <div class="todo-container">
    <nav>
      <img class="logo-img" src="@/assets/img/logo_lg.png" alt="LOGO" />
      <span @click="toLoginPage">登出</span>
    </nav>
    <div class="list-block">
      <Input />
    </div>
  </div>
</template>
<script>
// Component

import Input from "@/components/Input";

// Methods
import { useRouter } from "vue-router";

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
    };
  },
};
</script>
<style lang="scss" scoped>
.todo-container {
  width: 100%;
  padding: 1rem;
  height: 100vh;
  nav {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 70%;
    }
    span {
      cursor: pointer;
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
