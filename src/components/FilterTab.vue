<template>
  <ul class="filter-tab">
    <li
      :class="data.filter === 'All' ? data.selected : ''"
      @click="changeFilter('All')"
    >
      全部
    </li>
    <li
      :class="data.filter === 'UnComplete' ? data.selected : ''"
      @click="changeFilter('UnComplete')"
    >
      待完成
    </li>
    <li
      :class="data.filter === 'Completed' ? data.selected : ''"
      @click="changeFilter('Completed')"
    >
      已完成
    </li>
  </ul>
</template>

<script>
// Methods
import { ref } from "vue";

const data = ref({
  filter: "All",
  selected: "selected-tab",
});

export default {
  name: "FilterComponent",
  setup(props, { emit }) {
    const changeFilter = (filter) => {
      data.value.filter = filter;
      emit("changeFilter", filter);
    };
    return {
      data,
      changeFilter,
    };
  },
};
</script>
<style lang="scss" scoped>
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
</style>
