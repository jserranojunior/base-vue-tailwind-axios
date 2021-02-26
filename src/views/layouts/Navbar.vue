<template>
  <div>
    <div class="w-full text-gray-700 text-gray-200 bg-gray-800">
      <div
        class="flex max-w-screen px-2 mx-auto md:items-center md:justify-between md:flex-row md:px-2 lg:px-2 flex-col items-center"
      >
        <div class="p-4 flex flex-row items-center justify-between">
          <button @click="closeSidebar()" class="mr-4">
            <svg
              viewBox="0 0 100 80"
              width="20"
              height="20"
              class="fill-current hover:text-gray-600 text-gray-500"
            >
              <rect width="100" height="20"></rect>
              <rect y="30" width="100" height="20"></rect>
              <rect y="60" width="100" height="20"></rect>
            </svg>
          </button>
          <a
            href="#"
            class="text-lg font-semibold tracking-widest uppercase rounded-lg text-white focus:outline-none focus:shadow-outline"
            >Intellect</a
          >
          <button
            class="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
            @click="!open"
          >
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
              <path
                x-show="!open"
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
              <path
                x-show="open"
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <!--  -->
        <nav
          :class="
            'flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row ' +
              { flex: open, hidden: !open }
          "
        >
          <router-link
            :to="{ name: 'Home' }"
            class="px-4 py-2 mt-2 text-sm font-semibold rounded-lg focus:shadow-outline mx-1 md:mt-0 text-gray-400 hover:bg-gray-900 focus:bg-gray-600 hover:text-bg-gray-300"
            >Home
          </router-link>
          <router-link
            v-if="!auth.token"
            :to="{ name: 'Login' }"
            class="px-4 py-2 mt-2 text-sm font-semibold rounded-lg focus:shadow-outline mx-1 md:mt-0 text-gray-400 hover:bg-gray-900 focus:bg-gray-600 hover:text-bg-gray-300"
            href="#"
            >Login
          </router-link>
          <router-link
            v-if="auth.token"
            :to="{ name: 'Cadastro' }"
            class="px-4 py-2 mt-2 text-sm font-semibold rounded-lg focus:shadow-outline mx-1 md:mt-0 text-gray-400 hover:bg-gray-900 focus:bg-gray-600 hover:text-bg-gray-300"
            href="#"
            >Cadastro
          </router-link>
          <router-link
            v-if="auth.token"
            :to="{ name: 'Financeiro' }"
            class="px-4 py-2 mt-2 text-sm font-semibold rounded-lg focus:shadow-outline mx-1 md:mt-0 text-gray-400 hover:bg-gray-900 focus:bg-gray-600 hover:text-bg-gray-300"
            href="#"
          >
            Financeiro</router-link
          >

          <a
            v-if="auth.token"
            @click="Logout()"
            class="px-4 py-2 mt-2 text-sm font-semibold rounded-lg focus:shadow-outline mx-1 md:mt-0 text-gray-400 hover:bg-gray-900 focus:bg-gray-600 hover:text-bg-gray-300"
            href="#"
            >Sair
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  import { useLayouts } from "./use";
  import { inject } from "vue";

  export default {
    setup() {
      const useAuth = inject("auth");

      const { closeSidebar, open } = useLayouts();

      const { Logout, auth, fields } = useAuth;

      return { Logout, auth, closeSidebar, open, fields };
    },
  };
</script>
