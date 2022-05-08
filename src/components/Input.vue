<template>
  <div class="input-component">
    <span>{{ inputData.title }}</span>
    <input :type="inputData.inputType" :placeholder="inputData.placeholder" />
    <span class="hint-text">此欄位不可為空</span>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    "input-data": {
      default: {
        title: "",
        placeholder: "",
        inputType: "",
      },
    },
  },
  setup() {},
};
</script>

<style scoped lang="scss">
.input-component {
  width: 100%;
  span {
    margin-bottom: 0.5rem;
    font-size: 14px;
    display: block;
  }
  input {
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 11px 10px;
    line-height: 12px;
    border: 2px solid white;
  }
  input:focus {
    outline: none;
    border: 2px solid $primary-black;
  }
  .hint-text {
    font-size: 14px;
    margin: 0.3rem 0 1rem 0;
    color: transparent;
  }
}
</style>
