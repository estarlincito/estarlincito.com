import { ArticleCard } from '@app/imwriting/components/articles/card';
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
import { allArticles } from 'contentlayer/generated';
import * as React from 'react';

export const Latest = () => (
  <Section className='sm:p-5 lg:p-0'>
    <Heading as='h3' className='my-5 text-center' content='Latest Articles' />

    <Flex className='flex justify-center'>
      <Carousel
        className={cn('w-xs', 'md:w-xl', 'lg:w-full')}
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent>
          {allArticles.map((article) => (
            <CarouselItem
              className={cn(
                'basis-1/1',
                'md:basis-1/2',
                'lg:basis-1/3',
                'flex justify-center',
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
