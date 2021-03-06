<template>
  <div class="about">
    <h1>Meu contador: {{ $store.state.contador }}</h1>
    <input type="text" placeholder="Digite algo aqui..." v-model="texto" />
    <h2>{{ texto }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      texto: "",
    };
  },
};
</script>