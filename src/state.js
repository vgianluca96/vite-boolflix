import { reactive } from 'vue'
import axios from 'axios'

export const state = reactive({
    base_url: 'https://api.themoviedb.org/3/search/movie?api_key=2ac860428212e4c9593f814d1c5e9efe&language=it-IT',
    url: '',
    movieQuery: 'matrix',
    movieArray: [],

    fetchMovieData() {
        this.url = [this.base_url + '&query=' + this.movieQuery];
        axios.
            get(this.url)
            .then(response => {
                this.movieArray = response.data.results;

                console.log(this.movieArray);
            })
            .catch(error => {
                console.log(error);
            })
    }

})