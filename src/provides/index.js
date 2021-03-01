import { provide } from "vue";
import { useAuth } from "@/modules/auth/use/useAuth.js";
// import { useFinancial } from "@/modules/financeiro/use/useFinancial";
import { useApiConnect } from "@/modules/api/use/useApiConnect";
import { useAcl } from "@/modules/acl/use/useAcl.js";

export const Provides = () => {
  // provide("financial", useFinancial());
  provide("auth", useAuth());
  provide("apiconnect", useApiConnect());
  provide("acl", useAcl());
};
