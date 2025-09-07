import { generateMetadata, getHomeContent } from '@repo/content/fixly/home';
import { Container } from '@repo/ui/layouts/container';

import { ContactSection } from '@/features/home/components/contact-section';
import { HeroSection } from '@/features/home/components/hero-section';
import { OfferSection } from '@/features/home/components/offer-section';
import { TestimonialsSection } from '@/features/home/components/testimonials-section';
import { TopicSection } from '@/features/home/components/topic-section';
import { WhySection } from '@/features/home/components/why-section';

const HomePage = async ({ params }: PageProps<'/[lng]'>) => {
  const content = await getHomeContent(params);

  return (
    <Container>
      <HeroSection
        slogan={content.sections.hero.slogan}
        summary={content.summary}
        title={content.title}
      />
      <OfferSection {...content.sections.offer} />
      <TopicSection {...content.sections.topic} />
      <WhySection {...content.sections.why} />
      <TestimonialsSection {...content.sections.testimonials} />
      <ContactSection {...content.sections.contact} />
    </Container>
  );
};

export { HomePage as default, generateMetadata };
