import { serverSchema, serverEnv } from "./schema";

export const env = serverSchema.parse(serverEnv)