<script>
import { state } from './state.js'
import AppHeader from './components/AppHeader.vue'
import AppResults from './components/AppResults.vue'

export default {
  name: 'App',
  components: {
    AppResults,
    AppHeader
  },
  data() {
    return {
      state,
      messageInfo: 'Digitare lettere o parole chiave e premere il tasto "Search"',
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
  <AppHeader @sendQuery="this.sendQuery()" />

  <main>

    <div class="container py-4">

      <div class="w-100 text-center text-light mb-3">
        <h2>{{ messageInfo }}</h2>
      </div>

      <div class="w-100 text-center text-uppercase text-light mb-3">
        <h2>{{ messageError }}</h2>
      </div>

      <AppResults :messageInfo="this.messageInfo" :resultsArray="state.movieArray" :posterImg="state.baseImgUrl"
        :resultType="'movie'" />

      <AppResults :messageInfo="this.messageInfo" :resultsArray="state.TVSeriesArray" :posterImg="state.baseImgUrl"
        :resultType="'series'" />

    </div>

  </main>
</template>

<style lang="sass"></style>
