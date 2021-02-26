<template>
  <AddEditContas :mode="'add'"></AddEditContas>
</template>
<script>
  /* eslint-disable */
  import AddEditContas from "../components/AddEditContas";
  export default {
    setup() {
      return { AddEditContas };
    },
  };
</script>
