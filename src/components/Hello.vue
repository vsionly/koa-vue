<template>
  <div class="hello" @click.self="$emit('click')">
    <p>hello</p>
    <p>hello</p>
    <p>hello</p>
  </div>
</template>
<style scoped>
  .hello {
    color: #000;
  }
</style>
