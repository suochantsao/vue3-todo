<template>
  <button>{{ btnName }}</button>
</template>
<script>
export default {
  name: "Button",
  props: {
    "btn-name": {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  border: none;
  color: white;
  background-color: $primary-black;
  font-size: 1rem;
  border-radius: 10px;
  padding: 12px 48px;
  cursor: pointer;
}
</style>
