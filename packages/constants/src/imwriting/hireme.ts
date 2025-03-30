import { ObjectUtils } from '@estarlincito/utils';

const x = { label: 'Twitter', route: 'https://x.com/estarlincito' };
const linktr = { label: 'Linktr', route: 'https://linktr.ee/estarlincito' };
const links = [x, linktr];

export const hireme = ObjectUtils.freeze({ links, linktr, x });
