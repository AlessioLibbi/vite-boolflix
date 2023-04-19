import { reactive } from "vue";
export const store = reactive({
    arrayFilm: [],
    apiFilmUrl: "https://api.themoviedb.org/3/search/movie?api_key=0ea3fe4b29984932b83a4050e4450eae",
    apiSeriesUrl: "https://api.themoviedb.org/3/search/tv?api_key=0ea3fe4b29984932b83a4050e4450eae",
    query: ""
}) 
