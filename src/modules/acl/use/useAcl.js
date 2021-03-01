import { reactive, toRefs } from "vue";

export const useAcl = () => {
  const state = reactive({
    routesEnable: [],
  });

  async function setRoutesEnable() {
    const userAcl = [15, 9, 3, 1];
    userAcl.forEach((item) => {
      state.routesEnable[item] = item;
    });
  }

  function checkAclTo(to) {
    if (state.routesEnable.includes(to.meta.id) || to.meta.acl === "public") {
      console.log(to.meta.id);
      console.log(
        state.routesEnable.includes(to.meta.id) + "acl: " + to.meta.acl
      );
      console.log("redirecionando");
      return true;
    } else {
      return false;
    }
  }
  function checkAclName(id, typeAcl) {
    console.log("veriicando router to: " + id, typeAcl);
    let to = { meta: {} };
    to.meta.id = id;
    to.meta.acl = typeAcl;
    if (checkAclTo(to)) {
      return true;
    } else {
      return false;
    }
  }

  return { ...toRefs(state), checkAclTo, checkAclName, setRoutesEnable };
};
