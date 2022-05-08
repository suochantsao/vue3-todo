<template>
  <div class="signup-container">
    <div class="img-block">
      <img class="logo-img" src="../assets/img/logo_lg.png" alt="LOGO" />
      <img
        class="pc-img"
        src="../assets/img/login_img.png"
        alt="ILLUSTRATOR_IMG"
      />
    </div>
    <div class="input-block">
      <p>註冊帳號</p>
      <Input :input-name="'Email'" />
      <Input :input-name="'您的暱稱'" />
      <Input :input-name="'密碼'" />
      <Input :input-name="'再次輸入密碼'" />
      <Button :btn-name="'註冊帳號'" />
      <span class="signup-btn">登入</span>
    </div>
  </div>
</template>
<script>
// Component
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";
export default {
  name: "Login",
  components: { Input, Button },
};
</script>
<style lang="scss" scoped>
$pc-media: 1000px;

@mixin pc-width() {
  @media all and (min-width: $pc-media) {
    @content;
  }
}

.signup-container {
  width: 100%;
  height: 100vh;
  padding: 3rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 700;
  .img-block {
    display: flex;
    justify-content: center;
    .pc-img {
      display: none;
    }
  }
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
  }
  @include pc-width {
    flex-direction: row;
    justify-content: space-around;
    padding: 4rem 15rem;
    .img-block {
      width: 45%;
      display: flex;
      flex-direction: column;
      .logo-img {
        width: 80%;
        margin: 0 auto;
      }
      .pc-img {
        display: block;
        margin-top: 1rem;
      }
    }
    .input-block {
      width: 35%;
      padding: 0 1.3rem;
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
}
</style>
