import { useAcl } from "@/modules/acl/use/useAcl.js";
export const AclMiddleware = () => {
  const { checkAclTo } = useAcl();
  async function acl(to, from, next) {
    if (checkAclTo(to)) {
      next();
    }
  }
  return { acl };
};
