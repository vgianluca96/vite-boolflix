<script>
import { state } from './state.js'
import languageToCountry from './assets/js/languageToCountry.js'
import countriesFlags from './assets/js/countriesFlags.js'

export default {
  name: 'App',
  data() {
    return {
      state,
      languageToCountry,
      countriesFlags,
      messageInfo: 'Digitare parole chiave e premere il tasto "Cerca"',
      messageError: ''
    }
  },
  methods: {
    sendQuery() {
      this.messageInfo = '';
      if (state.query == '') {
        this.messageError = 'Digitare delle parole chiave nella barra di ricerca';
      } else {
        this.messageError = '';
      }
      state.fetchMovieData()
      state.fetchTVSeriesData()
    },
    searchFlag(lang) {
      let index = languageToCountry.language.indexOf(lang, 0);
      if (index == -1) {
        return false
      } else {
        let country = languageToCountry.country[index];
        let countryFlag = countriesFlags.flags[country].mini;
        return countryFlag
      }

    }

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
      <div class="mb-3" v-if="messageInfo == ''">
        <h4>La ricerca ha prodotto {{ state.movieArray.length }} risultati</h4>
      </div>
      <div class="row mb-3">
        <div class="col-3" v-for="movie in state.movieArray" v-if="state.movieArray.length > 0">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">{{ movie.title }} ({{ movie.original_title }})</h5>
              <p class="card-text">
              <ul class="list-group list-group-flush">
                <li class="list-group-item" v-if="this.searchFlag(movie.original_language)">
                  Lingua: <img :src="this.searchFlag(movie.original_language)" height="20" alt="">
                </li>
                <li class="list-group-item" v-else>
                  Lingua: {{ movie.original_language }}
                </li>
                <li class="list-group-item">Voto: {{ Math.round(Number(movie.vote_average) * 10) / 10 }}</li>
              </ul>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-3">
        <h2>Serie TV</h2>
      </div>
      <div class="mb-3" v-if="messageInfo == ''">
        <h4>La ricerca ha prodotto {{ state.TVSeriesArray.length }} risultati</h4>
      </div>
      <div class="row mb-3">
        <div class="col-3" v-for="series in state.TVSeriesArray" v-if="state.TVSeriesArray.length > 0">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">{{ series.name }} ({{ series.original_name }})</h5>
              <p class="card-text">
              <ul class="list-group list-group-flush">
                <li class="list-group-item" v-if="this.searchFlag(series.original_language)">
                  Lingua: <img :src="this.searchFlag(series.original_language)" height="20" alt="">
                </li>
                <li class="list-group-item" v-else>
                  Lingua: {{ series.original_language }}
                </li>
                <li class="list-group-item">Voto: {{ Math.round(Number(series.vote_average) * 10) / 10 }}</li>
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
