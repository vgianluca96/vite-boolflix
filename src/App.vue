<script>
import { state } from './state.js'

export default {
  name: 'App',
  data() {
    return {
      state,
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

      <div class="row mb-3">
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

      <div class="row g-2">
        <div class="col-3" v-for="movie in state.movieArray">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">{{ movie.original_title }} ({{ movie.title }})</h5>
              <p class="card-text">
              <ul>
                <li>Lingua: {{ movie.original_language }}</li>
                <li>Voto: {{ Math.round(Number(movie.vote_average) * 10) / 10 }}</li>
              </ul>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>

  </main>
</template>

<style lang="sass"></style>
