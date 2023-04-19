<script>
import { store } from "../store"
export default {
    props: {
        film: Object
    },
    data() {
        return {
            store,
            name: "AppFilm"
        }

    }
}
</script>

<template>
    <div class="my-card-film">
        <h3>{{ film.title }}</h3>
        <h3>{{ film.original_title }}</h3>
        <h3>{{ film.original_language }}</h3>
        <p>{{ film.vote_average }}</p>
    </div>
</template>


<style scoped lang="scss"></style>