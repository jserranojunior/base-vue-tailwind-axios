import { createLocalVue, shallowMount } from "@vue/test-utils";

import Vuex from "vuex";
import Auth from "../vuex";
import Login from "./Login.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    Auth
  }
});

const wrapper = shallowMount(Login, {
  localVue,
  store
});
const vm = wrapper.vm;

describe("Login", () => {
  it("Mounted Login", () => {
    expect(wrapper.findComponent(Login)).toBeTruthy();
  });

  // it("Login funcionando", () => {
  //   wrapper.find("#email").element.value = "jorgeserranojunir@gmail.com";
  //   wrapper.find("#password").element.value = "carro";
  //   wrapper.vm.Auth.token = "";
  //   wrapper.find("#login").trigger("click");

  //   wrapper.vm.$nextTick(() => {
  //     expect(wrapper.vm.Auth.token).toBe("");
  //     done();
  //   });
  // });

  it("Há input password", () => {
    const value = wrapper.find("#password").element.value;
    expect(value).toBe("");
  });
});

describe("Validando campos", () => {
  it("Email vazio", () => {
    wrapper.vm.fields.email = "";
    wrapper.vm.fields.password = "carro";
    const validation = wrapper.vm.validation();
    expect(validation).toBeFalsy();
  });
  it("Senha vazia", () => {
    wrapper.vm.fields.email = "jorge@gmail.com";
    wrapper.vm.fields.password = "";
    const validation = wrapper.vm.validation();
    expect(validation).toBeFalsy();
  });
  it("Email e senha preenchidos", () => {
    wrapper.vm.fields.email = "jorge@gmail.com";
    wrapper.vm.fields.password = "carro";
    const validation = wrapper.vm.validation();
    expect(validation).toBeTruthy();
  });
});
