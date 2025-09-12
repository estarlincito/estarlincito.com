import type { HomeContent } from '@repo/content/imwriting/home';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@repo/ui/components/carousel';
import { Heading } from '@repo/ui/components/heading';
import { Flex } from '@repo/ui/layouts/flex';
import { Section } from '@repo/ui/layouts/section';
import { cn } from '@repo/ui/lib/utils';
import * as React from 'react';

import { ArticleCard } from '@/features/articles/components/article-card';

export const HomeLatest = ({
  items,
  title,
}: HomeContent['sections']['latest']) => (
  <Section className='sm:p-5 lg:p-0'>
    <Heading as='h3' className='my-5 text-center' content={title} />

    <Flex className='flex justify-center'>
      <Carousel
        className={cn('w-xs', 'md:w-xl', 'lg:w-full')}
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent>
          {items.map((article) => (
            <CarouselItem
              className={cn(
                'basis-1/1', // smartphone
                'md:basis-1/2', // Tablet
                'lg:basis-1/3', // Desktop
              )}
              key={article._id}
            >
              <ArticleCard {...article} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Flex>
  </Section>
);
