<template>
  <div class="about">
    <h1>This is {{ username }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      require: true,
      default: `Username`,
    },
  },
};
</script>
