<script>
import { state } from './state.js'

export default {
  data() {
    return {
      state
    }
  },
}
</script>

<template>
  <header class="p-4">

    <h1>Boolflix</h1>

  </header>

  <main>

    <div class="container py-4">

      <div class="row">
        <div class="col-6">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Digita lettere o parole contenute nel titolo"
              v-model="state.movieQuery">
            <button class="btn btn-primary" type="button" id="btnMovie" @click="state.fetchMovieData()">
              Cerca film
            </button>
          </div>
        </div>
      </div>

    </div>


  </main>
</template>

<style lang="sass"></style>
