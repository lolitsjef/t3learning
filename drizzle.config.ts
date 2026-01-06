import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.POSTGRES_URL_NON_POOLING,
  },
  tablesFilter: ["t3learning_*"],
} satisfies Config;
