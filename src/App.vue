<script>
import { state } from './state.js'
import AppResults from './components/AppResults.vue'

export default {
  name: 'App',
  components: {
    AppResults
  },
  data() {
    return {
      state,
      messageInfo: 'Digitare lettere o parole chiave e premere il tasto "Cerca"',
      messageError: ''
    }
  },
  methods: {
    sendQuery() {
      this.messageInfo = '';
      if (state.query == '') {
        this.messageError = 'Barra di ricerca vuota';
      } else {
        this.messageError = '';
      }
      state.fetchMovieData()
      state.fetchTVSeriesData()
      //console.log(state);
    },
  }
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
              v-model="state.query">
            <button class="btn btn-primary" type="button" id="btnMovie" @click="this.sendQuery()">
              Cerca
            </button>
          </div>
        </div>
      </div>

      <div class="w-100 text-center text-info mb-3">
        <h2>{{ messageInfo }}</h2>
      </div>

      <div class="w-100 text-center text-danger mb-3">
        <h2>{{ messageError }}</h2>
      </div>

      <div class="mb-3">
        <h2>Film</h2>
      </div>
      <AppResults :messageInfo="this.messageInfo" :resultsArray="state.movieArray" :posterImg="state.baseImgUrl"
        :resultType="'movie'" />

      <div class="mb-3">
        <h2>Serie TV</h2>
      </div>
      <AppResults :messageInfo="this.messageInfo" :resultsArray="state.TVSeriesArray" :posterImg="state.baseImgUrl"
        :resultType="'series'" />

    </div>

  </main>
</template>

<style lang="sass"></style>
