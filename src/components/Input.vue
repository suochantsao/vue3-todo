<template>
  <div class="input-component">
    <span>{{ inputName }}</span>
    <input type="text" />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    "input-name": {
      type: String,
    },
  },
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
    margin-bottom: 2rem;
    border: 2px solid white;
  }
  input:focus {
    outline: none;
    border: 2px solid #333333;
  }
}
</style>
