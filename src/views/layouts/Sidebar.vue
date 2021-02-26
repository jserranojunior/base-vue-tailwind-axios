<template>
  <div
    id="sidebar"
    class="left-0 z-10 font-sans w-64 bg-gray-800 border-r border-t border-gray-900 float-left "
    :style="{ minHeight: sidebarHeight + 'px' }"
  >
    <nav class="">
      <div>
        <div class="bg-gray-700">
          <router-link
            to="/"
            class="py-2 px-16 block text-sm text-gray-100 hover:bg-blue-900 hover:text-white"
            href="#"
            >Home</router-link
          >
        </div>

        <button
          class="w-full flex justify-between items-center py-3 px-6 text-gray-100 cursor-pointer hover:bg-gray-900 hover:text-gray-100 focus:outline-none"
        >
          <span class="flex items-center">
            <svg
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>

            <span class="mx-4 font-medium">Dashboard</span>
          </span>

          <span>
            <svg
              class="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5L16 12L9 19"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                style="display: none"
              ></path>
              <path
                d="M19 9L12 16L5 9"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>
        </button>

        <div class="bg-gray-700">
          <router-link
            to="/financeiro"
            class="py-2 px-16 block text-sm text-gray-100 hover:bg-blue-900 hover:text-white"
            href="#"
            >Financeiro</router-link
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "Sidebar",
    data() {
      return {
        sidebarHeight: 0,
      };
    },
    beforeMount() {
      this.sidebarHeight = window.innerHeight - 60;
    },
  };
</script>
