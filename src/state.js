import { reactive } from 'vue'
import axios from 'axios'

export const state = reactive({
    message: 'state importato corrett',
    base_url: 'https://api.themoviedb.org/3/search/movie?api_key=2ac860428212e4c9593f814d1c5e9efe&query=matrix+reloaded',

    fetchMovie() {
        axios.
            get(this.base_url)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

})