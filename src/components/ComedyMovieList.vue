<template>
<div>
    <h3>Comedias</h3>
<ul>
    <li v-for="movie in comedyMovies" :key="movie.id">{{ movie.title }}</li>
</ul>
</div>
    
</template>               

<script>

export default {
    name: 'ComedyMovieList',    
    computed:{
        comedyMovies() {
            return this.$store.state.movies.filter(movie => movie.genre === "Comedy");
        }
    }
    
}
</script>

<style>

</style>