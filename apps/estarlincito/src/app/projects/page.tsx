import { estarlincito } from '@repo/constants';
import { getPathname } from '@repo/lib';
import { Header, type Links, Wrapper } from '@repo/ui';
import { headers } from 'next/headers';

import CardProjects from '@/components/ui/card-projects';
import CardWrapper from '@/components/ui/card-wrapper';
import { PROJECTS } from '@/constants/projects';
const { projects } = estarlincito;
export const { metadata } = projects;

const Page = async () => {
  const pathname = await getPathname(headers);

  const links: Links = [{ href: '/projects', title: 'Projects' }];

  return (
    <Wrapper>
      <Header
        links={links}
        pathname={pathname}
        summary={projects.description}
        title={projects.title}
      />

      <CardWrapper>
        {PROJECTS.map(({ label, summary, key }) => (
          <CardProjects key={key} label={label} summary={summary} />
        ))}
      </CardWrapper>
    </Wrapper>
  );
};

export default Page;
