<script>
import { store } from "../store";
import AppFilm from "./AppFilm.vue";
export default {
    components: {
        AppFilm,
    },
    data() {
        return {
            store,
            name: "AppMain"
        }
    }
}
</script>

<template>
    <div class="container-fluid d-flex justify-content-center text-center">
        <div class="row row-cols-3 d-flex">
            <div class="col" v-for="(film, index) in store.arrayFilm" :key="index">
                <AppFilm :film="film" />
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss"></style>