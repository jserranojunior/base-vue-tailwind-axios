<template>
  <div class="p-4">
    <h3 class="text-white text-center text-lg m-4">{{ msg }}</h3>
  </div>
</template>

<script>
  export default {
    setup() {
      const msg = "Seja bem vindo a " + process.env.VUE_APP_NAME;
      return { msg };
    },
  };
</script>
