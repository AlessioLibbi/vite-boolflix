<script>
import { store } from "../store"
export default {
    data() {
        return {
            store,
            name: "NavBar"
        }
    }
}
</script>

<template>
    <div class="container-fluid d-flex justify-content-between align-items-center p-4">
        <h1>BOOLFLIX</h1>
        <div class="search">
            <input type="text" v-model="store.query">
            <button @click="$emit('search')">Search</button>
        </div>
    </div>
</template>


<style scoped lang="scss">
.container-fluid {
    height: 100px;
    background-color: #000000;

    h1 {
        color: red;
    }
}
</style>