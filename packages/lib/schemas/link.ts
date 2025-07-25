import { t } from 'tyne';

export const LinkSchema = t.object({
  label: t.string().optional(),
  route: t.string().optional(),
});

export const LinksSchema = t.array(LinkSchema);

export type Links = t.infer<typeof LinksSchema>;
