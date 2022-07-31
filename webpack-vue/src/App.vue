<template>
<div class="app">
    app{{count}}
    <button @click="add">add</button>
</div>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'App',
  setup(){
      const count = ref(0)
      const add = ()=>{
          count.value ++
      }
      return {
          count,
          add
      }
  }

}
</script>

<style scoped>
.app {
    font-size: 16px;
    color: red;
}
</style>