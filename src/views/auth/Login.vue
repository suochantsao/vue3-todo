<template>
  <div class="input-block">
    <p>最實用的線上代辦事項服務</p>
    <Input :input-data="emailInputData" />
    <Input :input-data="passwordInputData" />
    <Button :btn-name="'登入'" @click="toSignUpPage('/')" />
    <span class="signup-btn" @click="toSignUpPage('/auth/signup')"
      >註冊帳號</span
    >
  </div>
</template>
<script>
// Component
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";

// Methods
import { useRouter } from "vue-router";
import { ref } from "vue";

const emailInputData = ref({
  title: "Email",
  placeholder: "請輸入 Email",
  inputType: "email",
});

const passwordInputData = ref({
  title: "Password",
  placeholder: "請輸入密碼",
  inputType: "password",
});

export default {
  name: "Login",
  components: { Input, Button },
  setup() {
    const router = useRouter();
    const toSignUpPage = (path) => {
      router.push(path);
    };
    return {
      toSignUpPage,
      emailInputData,
      passwordInputData,
    };
  },
};
</script>

<style lang="scss" scoped>
.input-block {
  color: $primary-black;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 20px;
    margin: 1.2rem 0 3rem 0;
    text-align: center;
  }
  .signup-btn {
    font-size: 1rem;
    margin-top: 1.5rem;
    cursor: pointer;
  }
  @include pc-width {
    width: 33%;
    p {
      font-size: 24px;
    }
  }
}
</style>
