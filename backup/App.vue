
<template>
  <Base>
    <h1>Signature Generator</h1>
    <EmailCard />
  </Base>
  <!-- <router-view /> -->
</template>

<script>
import EmailCard from "./components/EmailCard.vue";
export default {
  name: "EmailSignature",
  components: {
    EmailCard,
    Base: () => import("./views/Layout/Base.vue"),
  },
};
</script>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
