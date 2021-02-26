import { reactive, toRefs } from "vue";

export const useLayouts = () => {
  const state = reactive({
    closeSidebar,
    open: false,
  });
  function closeSidebar() {
    const Sidebar = document.getElementById("sidebar");
    Sidebar.classList.toggle("hidden");
  }
  return toRefs(state);
};
