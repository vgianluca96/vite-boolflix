import { reactive } from 'vue'
import axios from 'axios'

export const state = reactive({
    query: 'avengers',

    baseMovieUrl: 'https://api.themoviedb.org/3/search/movie?api_key=2ac860428212e4c9593f814d1c5e9efe&language=it-IT',
    movieUrl: '',
    movieArray: [],

    baseTVSeriesUrl: 'https://api.themoviedb.org/3/search/tv?api_key=2ac860428212e4c9593f814d1c5e9efe&language=it_IT',
    TVSeriesUrl: '',
    TVSeriesArray: [],

    baseImgUrl: 'https://image.tmdb.org/t/p/w342/',

    genresUrl: 'https://api.themoviedb.org/3/genre/movie/list?language=it-IT&api_key=2ac860428212e4c9593f814d1c5e9efe',
    genresArray: [],

    baseMovieCastUrl: 'https://api.themoviedb.org/3/movie/',
    movieCastUrl: '',
    movieCastArray: [],

    baseTVSeriesCastUrl: 'https://api.themoviedb.org/3/tv/',
    TVSeriesCastUrl: '',
    TVSeriesCastArray: [],

    fetchMovieData() {
        this.movieUrl = [this.baseMovieUrl + '&query=' + this.query];
        axios
            .get(this.movieUrl)
            .then(response => {
                this.movieArray = response.data.results;
                console.log(this.movieArray);
            })
            .catch(error => {
                console.log(error);
            })
    },
    fetchTVSeriesData() {
        this.TVSeriesUrl = [this.baseTVSeriesUrl + '&query=' + this.query];
        axios
            .get(this.TVSeriesUrl)
            .then(response => {
                this.TVSeriesArray = response.data.results;
                console.log(state.TVSeriesArray);
            })
            .catch(error => {
                console.log(error);
            })
    },
    fetchGenres() {
        axios
            .get(this.genresUrl)
            .then(response => {
                this.genresArray = response.data.genres;
                console.log(this.genresArray);
            })
            .catch(error => {
                console.log(error);
            })
    },
    fetchMovieCast(id) {
        this.movieCastUrl = [this.baseMovieCastUrl + id + '/credits?language=en-US&api_key=2ac860428212e4c9593f814d1c5e9efe'];
        axios
            .get(this.movieCastUrl)
            .then(response => {
                this.movieCastArray = response.data.cast;
                //console.log(this.movieCastArray);
            })
            .catch(error => {
                console.log(error);
            })

    },
    fetchTVSeriesCast(id) {
        this.TVSeriesCastUrl = [this.baseTVSeriesCastUrl + id + '/credits?language=en-US&api_key=2ac860428212e4c9593f814d1c5e9efe'];
        axios
            .get(this.TVSeriesCastUrl)
            .then(response => {
                this.TVSeriesCastArray = response.data.cast;
                //console.log(this.TVSeriesCastArray);
            })
            .catch(error => {
                console.log(error);
            })
    }
})