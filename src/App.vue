<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <!-- <div class="nav">
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/currentDiagnosis">Current Diagnosis</RouterLink> |
        <RouterLink to="/diagnosisHistory">Diagnosis History</RouterLink> |
        <RouterLink to="/searchDiagnosis">Search Diagnosis</RouterLink> |
        <RouterLink to="/surveyDiagnosis">Survey Diagnosis</RouterLink>
    </div> -->
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
}

/* .logo {
  display: block;
  margin: 0 auto;
} */

/* #app {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */

/* nav { */
  /* font-size: 12px;
  margin-top: 2rem; */
  /* padding: 30px;
} */

/* nav a.router-link-exact-active {
  color: white;
  background: #42b983;
} */

/* nav a.router-link-exact-active:hover {
  background-color: transparent;
} */

/* nav a { */
  /* display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border); */
  /* font-weight: bold;
  color: #2c3e50;
} */

/* nav a:first-of-type {
  border: 0;
} */

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
