<template>
  <div class="todo-container">
    <nav>
      <img class="logo-img" src="@/assets/img/logo_lg.png" alt="LOGO" />
      <div class="nav-btn-block">
        <span class="user-name">{{ DATA.userName }} 的代辦</span>
        <!-- <span class="logout-btn" @click="toLoginPage">登出</span> -->
      </div>
    </nav>
    <main>
      <Input :input-data="todoInputData" @newTodo="addNewTodo" />
      <div class="list-section">
        <div class="non-data-block" v-if="DATA.activeAry.length === 0">
          <span>目前尚無待辦事項 </span>
          <img src="@/assets/img/empty.png" alt="" />
        </div>
        <div class="todolist-block" v-if="DATA.activeAry.length !== 0">
          <FilterTab @changeFilter="clickFilter" />
          <Todo :todolist="DATA.activeAry" />
          <ul class="complete-block">
            <li>{{ DATA.listLength }} 個待完成項目</li>
            <li class="clean-btn" @click="delCompletedTodo">清除已完成項目</li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
// Component
import Input from "@/components/Input";
import Todo from "@/components/Todo";
import FilterTab from "@/components/FilterTab";

// Methods
import { useRouter } from "vue-router";
import { ref, watch, onMounted } from "vue";

const todoInputData = ref({
  todoIcon: true,
  placeholder: "新增待辦事項",
});

const DATA = ref({
  filter: "All",
  selected: "selected-tab",
  userName: "Angela",
  activeAry: [],
  completedArr: [],
  listLength: 0,
});

export default {
  name: "TodoList",
  components: { Input, Todo, FilterTab },
  setup() {
    const router = useRouter();
    const toLoginPage = () => {
      router.push("/auth/login");
    };
    const changeFilter = (filter) => {
      DATA.value.filter = filter;
    };
    const addNewTodo = (value) => {
      DATA.value.activeAry.push({
        todo: value,
        isCheck: false,
      });
    };
    const clickFilter = (value) => {
      console.log(value);
    };
    const countAryLength = (value) => {
      DATA.value.listLength = 0;
      value.forEach((item) => {
        if (item.isCheck === false) {
          DATA.value.listLength += 1;
        }
      });
    };

    const delCompletedTodo = () => {
      const Arr = DATA.value.activeAry;
      for (let i = Arr.length - 1; i >= 0; i--) {
        if (Arr[i].isCheck === true) {
          DATA.value.activeAry.splice(i, 1);
        }
      }
    };

    onMounted(() => {
      countAryLength(DATA.value.activeAry);
    });
    watch(DATA.value.activeAry, (value) => {
      countAryLength(value);
    });

    return {
      toLoginPage,
      todoInputData,
      DATA,
      changeFilter,
      addNewTodo,
      countAryLength,
      delCompletedTodo,
      clickFilter,
    };
  },
};
</script>
<style lang="scss" scoped>
.todo-container {
  width: 100%;
  padding: 0 1.5rem;
  height: 100vh;
  max-height: -webkit-fill-available;

  nav {
    margin-bottom: 1rem;
    padding-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 70%;
    }
    .user-name {
      display: none;
      font-size: 1rem;
      font-weight: 700;
      margin-right: 2rem;
    }
    .logout-btn {
      cursor: pointer;
      font-weight: 400;
    }
  }
  main {
    margin: 0 0.1rem;
  }
  .list-section {
    display: flex;
    justify-content: center;
    margin-top: 1.2rem;
    .non-data-block {
      display: flex;
      flex-direction: column;
      justify-content: center;
      span {
        text-align: center;
        margin: 2rem 0 1rem 0;
      }
    }
    .todolist-block {
      width: 100%;
      border-radius: 10px;
      background-color: #fff;
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
      .filter-tab {
        display: flex;
        justify-content: space-evenly;
        line-height: 3.5rem;
        li {
          width: 100%;
          cursor: pointer;
          text-align: center;
          color: #9f9a91;
          border-bottom: 1px solid #efefef;
        }
        .selected-tab {
          border-bottom: 2px solid #333333;
          color: #333333;
        }
      }
      .complete-block {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        margin: 1.2rem;
        padding-bottom: 0.3rem;
        .clean-btn {
          color: #9f9a91;
          cursor: pointer;
        }
      }
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
    nav {
      padding: 1rem;
      margin-bottom: 3rem;
      img {
        width: 30%;
      }
      .nav-btn-block {
        display: flex;
        justify-content: space-between;
        .user-name {
          display: block;
          font-size: 1rem;
          font-weight: 700;
          margin-right: 2rem;
        }
      }
    }
    main {
      width: 45%;
      margin: 0 auto;
    }
  }
}
</style>
