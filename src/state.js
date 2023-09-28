import { reactive } from 'vue'
import axios from 'axios'

export const state = reactive({
    query: 'matrix',

    baseMovieUrl: 'https://api.themoviedb.org/3/search/movie?api_key=2ac860428212e4c9593f814d1c5e9efe&language=it-IT',
    movieUrl: '',
    movieArray: [],

    baseTVSeriesUrl: 'https://api.themoviedb.org/3/search/tv?api_key=2ac860428212e4c9593f814d1c5e9efe&language=it_IT',
    TVSeriesUrl: '',
    TVSeriesArray: [],

    fetchMovieData() {
        this.movieUrl = [this.baseMovieUrl + '&query=' + this.query];
        axios.
            get(this.movieUrl)
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
        axios.
            get(this.TVSeriesUrl)
            .then(response => {
                this.TVSeriesArray = response.data.results;
                console.log(state.TVSeriesArray);
            })
            .catch(error => {
                console.log(error);
            })
    }
})