<script>
import { store } from "../store"
import "/node_modules/flag-icons/css/flag-icons.min.css";
export default {
    props: {
        film: Object
    },
    data() {
        return {
            store,
            name: "AppFilm"
        }

    },
    methods: {
        valueChange(parameters) {
            if (!this.film.title) {
                if (parameters == "title") {
                    return this.film.name
                } if (parameters == "subtitle") {
                    return this.film.original_name
                }
            } else {
                return this.film.title
            }
        },


    }
}
</script>

<template>
    <div class="card ">
        <div class="my-img">
            <img :src="`${store.imgPath}${film.poster_path}`" src="" alt="">
        </div>
        <div class="info text-center ">
            <p>Titolo: <span>{{ valueChange("title") }}</span></p>
            <p>Titolo originale: <span>{{ valueChange("subtitle") }}</span></p>
            <h2><span class="fi" :class="`fi-${film.original_language}`"></span></h2>
            <p>Voto dalla critica: <span>{{ film.vote_average.toFixed(1) }}</span></p>
        </div>
    </div>
</template>


<style scoped lang="scss">
.card {
    height: 400px;
    cursor: pointer;
    position: relative;
    background-color: black;
    object-fit: contain;

    .my-img {
        height: 100%;


        img {
            max-width: 100%;
            width: 100%;
            display: block;
            height: 100%;

        }
    }

    .info {
        position: absolute;
        display: none;
        width: 100%;
        color: white;
    }

    &:hover img {
        opacity: .1;

    }

    &:hover .info {
        display: block;
    }
}
</style>