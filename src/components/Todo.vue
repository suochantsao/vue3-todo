<template lang="">
  <ul class="todo-list">
    <li>
      <img
        v-if="!checkTodo.isCheck"
        src="@/assets/img/checkbox.png"
        @click="completeCheck()"
      />
      <img
        v-if="checkTodo.isCheck"
        src="@/assets/img/check.png"
        @click="completeCheck()"
      />
      <p :class="checkTodo.isCheck ? checkTodo.checkStyle : ''">
        寫完 Vue 3 Todolist
      </p>
    </li>
    <li>
      <img src="@/assets/img/Vector.png" alt="" srcset="" />
    </li>
  </ul>
</template>
<script>
import { ref } from "vue";

const checkTodo = ref({
  isCheck: false,
  checkStyle: "checked",
});

export default {
  name: "TodoComponent",
  setup() {
    const completeCheck = () => {
      checkTodo.value.isCheck = !checkTodo.value.isCheck;
    };
    return {
      checkTodo,
      completeCheck,
    };
  },
};
</script>
<style lang="scss" scoped>
.todo-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4%;
  padding-bottom: 1rem;
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
  li {
    display: flex;
    font-size: 14px;
    align-items: center;

    p {
      margin-left: 0.8rem;
    }
    .checked {
      color: #9f9a91;
      text-decoration-line: line-through;
    }
    img {
      cursor: pointer;
    }
  }
}
</style>
