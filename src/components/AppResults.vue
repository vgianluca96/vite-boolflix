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
    <div class="mb-3" v-if="messageInfo == ''">
        <h4>La ricerca ha prodotto {{ resultsArray.length }} risultati</h4>
    </div>

    <div class="row mb-3 g-3">

        <AppSingleResult v-for="result in resultsArray" v-if="resultsArray.length > 0" :result="result"
            :posterImg="posterImg" :resultType="resultType" />

    </div>
</template>

<style></style>