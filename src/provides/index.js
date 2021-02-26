import { provide } from "vue";
import { useAuth } from "@/modules/auth/use/useAuth.js";
import { useFinancial } from "@/modules/financeiro/use/useFinancial";
import { useApiConnect } from "@/modules/api/use/useApiConnect";

export const Provides = () => {
  provide("financial", useFinancial());
  provide("auth", useAuth());
  provide("apiconnect", useApiConnect());
};
