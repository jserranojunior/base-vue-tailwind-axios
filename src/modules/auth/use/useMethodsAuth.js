// import { ref } from "vue";
import { useStateAuth } from "./useAuth";
const { fields } = useStateAuth();
export const useMethodsAuth = () => {
  const Login = () => {
    fields.value.email = "21";
    console.log(fields.value);
    console.log(validation());
  };
  const validation = () => {
    console.log("ue");
    console.log(fields.value);

    if (fields.value && fields.value.email && fields.value.password) {
      return true;
    } else {
      return false;
    }
  };

  return { Login };
};
