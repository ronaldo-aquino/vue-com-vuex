<template>
  <div class="home">
    <h1 :style="corContador">{{ titulo }}: {{ contador }}</h1>
  </div>
  <button @click="acaoAumentar">Aumentar</button>
  <BtnDiminuir />
  <hr />
  <BotaoAcao :estado="true" />
  <BotaoAcao :estado="false" />
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import BtnDiminuir from "../components/BtnDiminuir";
import BotaoAcao from "../components/BotaoAcao";
export default {
  name: "Home",
  components: {
    BtnDiminuir,
    BotaoAcao,
  },

  data() {
    return {
      titulo: "Meu contador VUEX",
    };
  },

  computed: {
    ...mapState(["contador"]),
    corContador() {
      return [this.contador > 100 ? { color: "green" } : { color: "red" }];
    },
  },

  methods: {
    ...mapMutations(["aumentar", "diminuir"]),
    ...mapActions(["acaoAumentar"]),
  },
};
</script>
