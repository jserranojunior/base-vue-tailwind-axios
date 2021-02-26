<template>
  <div>
    <Main>
      <template v-slot:main>
        <router-view></router-view>
      </template>
    </Main>
  </div>
</template>

<script>
  import Main from "./views/layouts/Main";

  import { Provides } from "@/provides";
  export default {
    name: "App",
    setup() {
      Provides();

      // const { isLogged } = useAuth;
    },
    components: {
      Main,
    },
  };
</script>
