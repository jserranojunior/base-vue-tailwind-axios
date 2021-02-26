<template>
  <AddEditContas :mode="'edit'"></AddEditContas>
</template>
<script>
  /* eslint-disable */
  import AddEditContas from "../components/AddEditContas";
  export default {
    name: "EditarConta",
    data() {
      return {};
    },
    components: {
      AddEditContas,
    },
  };
</script>
