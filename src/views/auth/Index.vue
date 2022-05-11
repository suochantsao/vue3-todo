<template>
  <div class="signup-container">
    <div class="img-block">
      <img class="logo-img" src="@/assets/img/logo_lg.png" alt="LOGO" />
      <img
        class="pc-img"
        src="@/assets/img/login_img.png"
        alt="ILLUSTRATOR_IMG"
      />
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "Login",
};
</script>
<style lang="scss" scoped>
.signup-container {
  width: 100%;
  height: 100vh;
  max-height: -webkit-fill-available;
  padding: 0 2.5rem;
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

  @include pc-width {
    width: 1000px;
    margin: 0 auto;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
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
  }
}
</style>
