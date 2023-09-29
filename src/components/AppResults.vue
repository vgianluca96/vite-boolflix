<script>

import AppSingleResult from './AppSingleResult.vue'

export default {
    name: 'AppResults',
    props: ['messageInfo', 'resultsArray', 'posterImg', 'resultType'],
    components: {
        AppSingleResult
    }
}
</script>

<template>
    <div v-if="messageInfo == ''">
        <div class="mb-3">
            <h3 v-if="resultType == 'movie'">
                Film
            </h3>
            <h3 v-else-if="resultType == 'series'">
                Serie TV
            </h3>
        </div>

        <div class="mb-3">
            <h5>
                La ricerca ha prodotto {{ resultsArray.length }} risultati
            </h5>
        </div>
    </div>

    <div class="row mb-3 g-3">

        <AppSingleResult v-for="result in resultsArray" v-if="resultsArray.length > 0" :result="result"
            :posterImg="posterImg" :resultType="resultType" />

    </div>
</template>

<style></style>