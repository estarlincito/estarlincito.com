import { z } from 'zod';

export const overviewSchema = z.object({
  bio: z.string(),
  closing: z.string(),
  greeting: z.string(),
  mission: z.string(),
  topics: z.array(
    z.object({
      key: z.number(),
      label: z.string(),
      value: z.string(),
    }),
  ),
});

export type OverviewTypes = z.infer<typeof overviewSchema>;
