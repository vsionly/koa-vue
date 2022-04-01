<template>
  <div class="hello" @click.self="$emit('click')">
    <p>hell3</p>
    <p>hello</p>
  </div>
</template>
<style scoped>
  .hello {
    color: #000;
  }
</style>
