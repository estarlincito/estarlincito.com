import { generateMetadata, getHomeContent } from '@repo/content/fixly/home';
import type { LocalesParams } from '@repo/content/utils/locales';
import { Container } from '@repo/ui/layouts/container';

import { ContactSection } from '@/features/home/components/contact-section';
import { HeroSection } from '@/features/home/components/hero-section';
import { OfferSection } from '@/features/home/components/offer-section';
import { TestimonialsSection } from '@/features/home/components/testimonials-section';
import { TopicSection } from '@/features/home/components/topic-section';
import { WhySection } from '@/features/home/components/why-section';

export { generateMetadata };

const HomePage = async ({ params }: LocalesParams) => {
  const { lng } = await params;

  const content = await getHomeContent(lng);

  return (
    <Container>
      <HeroSection
        slogan={content.sections.hero.slogan}
        summary={content.summary}
        title={content.title}
      />
      <OfferSection lng={lng} {...content.sections.offer} />
      <TopicSection lng={lng} title={content.sections.topic.title} />
      <WhySection {...content.sections.why} />
      <TestimonialsSection {...content.sections.testimonials} />
      <ContactSection {...content.sections.contact} />
    </Container>
  );
};
export default HomePage;
