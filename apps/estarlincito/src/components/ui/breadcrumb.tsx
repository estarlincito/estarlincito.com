'use client';
import { Breadcrumb, type Slug } from '@repo/ui';
import { usePathname } from 'next/navigation';

const ClientBreadcrumb = ({ slug }: { slug: Slug }) => {
  return <Breadcrumb slug={slug} usePathname={usePathname} />;
};

export default ClientBreadcrumb;
