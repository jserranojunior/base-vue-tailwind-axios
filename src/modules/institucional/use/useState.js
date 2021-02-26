import { toRefs, reactive } from "vue";
export const useState = () => {
  const state = reactive({
    logo: require("@/assets/imgs/logo.png"),
    banner: require("@/assets/imgs/institucional/banner-home.png"),

    video: "/videos/videolaspalmas.mp4",
    linkmapa:
      "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1288.6079629238022!2d-46.274691206548184!3d-24.005178528126653!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1613755467581!5m2!1spt-BR!2sbr",
  });

  return toRefs(state);
};
