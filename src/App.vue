<script>
import NavBar from './components/NavBar.vue';
import { store } from "./store";
import axios from "axios";
import AppMain from './components/AppMain.vue';
export default {
  components: {
    NavBar,
    AppMain,
  },
  data() {
    return {
      store
    }
  },
  mounted() {

  },
  methods: {
    apiFilmCall(params) {
      axios.get(params, {
        params: {
          query: this.store.query
        }
      }).then(resp => {
        if (this.store.arrayFilm == "") {

          this.store.arrayFilm = resp.data.results
        } else {
          this.store.arrayTv = resp.data.results
        }
      })
    },
    searchFilm() {
      this.store.arrayFilm = ""
      this.apiFilmCall(this.store.apiFilmUrl),
        this.apiFilmCall(this.store.apiSeriesUrl),
        this.store.query = ""
    }
  }
}


</script>

<template>
  <NavBar @search="searchFilm" />
  <AppMain />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>