<template>
  <div class="input-block">
    <p>註冊帳號</p>
    <Input :input-data="emailInputData" />
    <Input :input-data="nameInputData" />
    <Input :input-data="passwordInputData" />
    <Input :input-data="checkPasswordInputData" />
    <Button :btn-name="'註冊帳號'" />
    <span class="signup-btn" @click="toLoginPage">登入</span>
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

const nameInputData = ref({
  title: "您的暱稱",
  placeholder: "請輸入暱稱",
  inputType: "text",
});

const passwordInputData = ref({
  title: "Password",
  placeholder: "請輸入密碼",
  inputType: "password",
});

const checkPasswordInputData = ref({
  title: "再次輸入密碼",
  placeholder: "請再次輸入密碼",
  inputType: "password",
});

export default {
  name: "SignUp",
  components: { Input, Button },
  setup() {
    const router = useRouter();
    const toLoginPage = () => {
      router.push("/auth/login");
    };
    return {
      toLoginPage,
      emailInputData,
      passwordInputData,
      nameInputData,
      checkPasswordInputData,
    };
  },
};
</script>
<style lang="scss" scoped>
.input-block {
  color: #333333;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 24px;
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
    align-items: start;
    p {
      font-size: 24px;
      margin-bottom: 2rem;
    }
    button {
      margin: 0 auto;
    }
    .signup-btn {
      margin: 1.5rem auto 0 auto;
    }
  }
}
</style>
