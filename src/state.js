import { reactive } from 'vue'
import axios from 'axios'

export const state = reactive({
    base_url: 'https://api.themoviedb.org/3/search/movie?api_key=2ac860428212e4c9593f814d1c5e9efe',
    url: '',
    movieQuery: 'matrix+reloaded',

    fetchMovie() {
        this.url = [this.base_url + '&query=' + this.movieQuery];
        axios.
            get(this.url)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

})