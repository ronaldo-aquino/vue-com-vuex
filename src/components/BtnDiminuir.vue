<template>
  <button @click="acaoDiminuir(50)">Diminuir</button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "BtnDiminuir",

  methods: {
    ...mapActions(["acaoDiminuir"]),
  },
};
</script>

<style scoped>
</style>