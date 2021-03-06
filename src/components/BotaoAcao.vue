<template>
  <button @click="acaoBotao({ estado, numero: 15 })">{{ textoBotao }}</button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "BotaoAcao",

  props: {
    estado: Boolean,
  },

  computed: {
    textoBotao() {
      return this.estado ? "Aumentar" : "Diminuir";
    },
  },

  methods: {
    ...mapActions(["acaoBotao"]),
  },
};
</script>

<style scoped>
</style>