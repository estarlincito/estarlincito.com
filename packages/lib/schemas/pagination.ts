import { t } from 'tyne';

export const PaginationSchema = t.object({
  count: t.number(),
  limit: t.string().optional(),
  offset: t.string().optional(),
  route: t.string(),
  title: t.string(),
});

export type Pagination = t.infer<typeof PaginationSchema>;
