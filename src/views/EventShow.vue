<template lang="pug">
  h1 Showing event # {{ id }}
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
      default: `a1`,
    },
  },
};
</script>
