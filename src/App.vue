<script>
import { state } from './state.js'

export default {
  data() {
    return {
      state
    }
  },
  created() {
    state.fetchMovie();
  }
}
</script>

<template>
  <header class="p-4">

    <h1>Boolflix</h1>

  </header>

  <main>

    <div class="container py-4">
      {{ state.message }}
    </div>

  </main>
</template>

<style lang="sass"></style>
