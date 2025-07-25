import type { HomeContent } from '@repo/content/estarlincito/home';
import { host } from '@repo/content/imwriting/settings';
import { Blockquote } from '@repo/ui/components/blockquote';
import { Heading } from '@repo/ui/components/heading';
import { Image } from '@repo/ui/components/image';
import { Link } from '@repo/ui/components/link';
import { Section } from '@repo/ui/layouts/section';

export const ImwritingSection = ({
  article,
  cta,
}: HomeContent['sections']['imwriting']) => {
  const { title, cover, coverAlt, description, slugs, lang } = article;

  return (
    <Section>
      <Heading as='h3' className='mb-5' content={title} />
      <Image alt={coverAlt} className='rounded-2xl' src={cover} />
      <Blockquote>{description}</Blockquote>

      <Link
        className='w-fit'
        label={cta.label}
        route={`${host}/${lang}${slugs.article}`}
        target='_blank'
      />
    </Section>
  );
};
