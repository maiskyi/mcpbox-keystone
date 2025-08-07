import { createAuth } from "@keystone-6/auth";

const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  sessionData: "name email isAdmin",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"],
  },
});

export { withAuth };
