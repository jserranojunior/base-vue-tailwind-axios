import { useHttpAuth } from "./useHttpAuth";
import { reactive, toRefs } from "vue";
import router from "@/router";
export const useAuth = () => {
  const state = reactive({
    ola: "Ola",
    fields: {},
    auth: { erro: "", token: "" },
  });

  async function Login() {
    if (state.fields && state.fields.email && state.fields.password) {
      await useHttpAuth()
        .login(state.fields)
        .then((res) => {
          if (res && res.data) {
            setToken(res.data.token).then((response) => {
              if (response) {
                router.push({ name: "Financeiro" });
              }
            });
          } else {
            state.auth.erro = "Erro ao fazer o login";
          }
        });
    } else {
      state.auth.erro = "Campos Vazios";
      setToken("");
    }
  }

  async function isLogged() {
    if (localStorage.getItem("token") !== state.auth.token) {
      let token = "";
      if (
        localStorage.getItem("token") != "null" ||
        localStorage.getItem("token") != "undefined" ||
        localStorage.getItem("token") != null ||
        localStorage.getItem("token") != undefined
      ) {
        token = localStorage.getItem("token");
      }

      await setToken(token).then(() => {
        if (!state.auth && !state.auth.token !== "") {
          state.auth.erro = "Erro ao fazer login";
          return false;
        } else {
          return true;
        }
      });
    }
    if (
      !state.auth ||
      !state.auth.token ||
      state.auth.token == "" ||
      state.auth.token == undefined ||
      state.auth.token == "undefined" ||
      state.auth.token == "null" ||
      state.auth.token == null ||
      state.auth.token.length == 0
    ) {
      return false;
    } else if (state.auth && state.auth.token !== "") {
      return true;
    }
  }

  async function setToken(value) {
    localStorage.setItem("token", value);
    state.auth.token = value;
    if (value) {
      state.auth.erro = "";
      return true;
    } else {
      return false;
    }
  }
  function Logout() {
    setToken("");
    router.push({ name: "Login" });
  }
  return { ...toRefs(state), Logout, Login, isLogged };
};
