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
    apiFilmCall() {
      axios.get(this.store.apiFilmUrl, {
        params: {
          query: this.store.query
        }
      }).then(resp => {
        this.store.arrayFilm = resp.data.results
      })
    }
  }
}


</script>

<template>
  <NavBar @search="apiFilmCall" />
  <AppMain />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>