import {
  generateMetadata,
  generateStaticParams,
  getQuoteContent,
} from '@repo/content/quotely/quotes/quote';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';
import CatchAll from '@repo/ui/pages/catch-all';

import { InterestingQuotes } from '@/features/quotes/quote/components/quote-interesting';
import { QuoteMeta } from '@/features/quotes/quote/components/quote-meta';

const QuotePage = async ({ params }: PageProps<'/[lng]/quotes/[id]'>) => {
  const content = await getQuoteContent(params);
  if (!content) return CatchAll({ params });

  return (
    <Container className='flex flex-col gap-y-10'>
      <Header blockquote summary={content.summary} title={content.title} />
      <QuoteMeta {...content} />
      <InterestingQuotes
        interesting={content.translation.interesting}
        label={content.translation.label}
        randomQuotes={content.randomQuotes}
        route={content.route}
      />
    </Container>
  );
};

export { QuotePage as default, generateMetadata, generateStaticParams };
