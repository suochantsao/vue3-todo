<template lang="">
  <ul class="todo-list" :key="index" v-for="(item, index) in LIST">
    <li>
      <img
        v-if="!item.isCheck"
        src="@/assets/img/checkbox.png"
        @click="completeCheck(index)"
      />
      <img
        v-if="item.isCheck"
        src="@/assets/img/check.png"
        @click="completeCheck(index)"
      />
      <input v-model="item.todo" :class="{ checked: item.isCheck }" />
    </li>

    <li>
      <img src="@/assets/img/Vector.png" @click="delTodo(index)" />
    </li>
  </ul>
</template>
<script>
import { ref, watch } from "vue";

export default {
  name: "TodoComponent",
  // * 22/05/27 不能直接修改 props 的值，會噴 Unexpected mutation of 'props 的值' prop
  props: {
    todolist: {
      default: [],
    },
  },
  setup(props) {
    watch(
      props.todolist,
      (value) => {
        LIST.value = value;
        console.log(value);
      },
      {
        deep: true,
      }
    );

    const LIST = ref([...props.todolist]);

    const completeCheck = (index) => {
      LIST.value[index].isCheck = !LIST.value[index].isCheck;
    };
    const delTodo = (index) => {
      LIST.value.splice(index, 1);
      console.log(LIST.value);
    };

    return {
      completeCheck,
      LIST,
      delTodo,
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
    font-size: 1em;
    align-items: center;

    .checked {
      color: #9f9a91;
      padding: 1px 4px;
      text-decoration-line: line-through;
    }
    img {
      cursor: pointer;
    }
    input {
      border: none;
      font-size: 1em;
      margin-left: 8px;
      outline: none;
    }
  }
}
</style>
