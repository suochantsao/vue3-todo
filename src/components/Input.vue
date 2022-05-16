<template>
  <div class="input-component">
    <span>{{ inputData.title }}</span>
    <div class="input-block">
      <input :type="inputData.inputType" :placeholder="inputData.placeholder" />
      <img
        src="@/assets/img/plus.png"
        alt=""
        srcset=""
        v-if="inputData.todoIcon"
      />
    </div>
    <span class="hint-text" v-if="!inputData.todoIcon">此欄位不可為空</span>
  </div>
</template>

<script>
import { ref } from "vue";

const inputValue = ref({
  data: "",
});

export default {
  name: "Input",
  props: {
    "input-data": {
      default: {
        title: "",
        placeholder: "",
        inputType: "",
        todoIcon: "",
      },
    },
  },
  setup() {
    return {
      inputValue,
    };
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
  .input-block {
    display: flex;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);

    img {
      padding: 0.5rem;
      cursor: pointer;
    }
    input {
      width: 100%;
      border: none;
      margin-left: 5px;
      border-radius: 10px;
      padding: 12px 10px;
      font-size: 18px;
    }
    input:focus {
      outline: none;
    }
  }
  .hint-text {
    font-size: 14px;
    margin: 0.3rem 0 1rem 0;
    color: transparent;
  }
}
</style>
