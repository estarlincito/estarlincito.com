import { ArticleCard } from '@app/imwriting/components/articles/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@repo/ui/components/carousel';
import { Heading } from '@repo/ui/components/heading';
import { Section } from '@repo/ui/layouts/section';
import { cn } from '@repo/ui/lib/utils';
import { allArticles } from 'contentlayer/generated';
import * as React from 'react';

export function CarouselSize() {
  return (
    <Section>
      <Heading
        as='h3'
        className={cn('my-5 text-center', 'md:text-left')}
        content='Latest Articles'
      />
      <Carousel
        className='w-full'
        opts={{
          align: 'center',
        }}
      >
        <CarouselContent>
          {allArticles.map((article) => (
            <CarouselItem
              className='md:basis-1/2 lg:basis-1/3'
              key={article._id}
            >
              <div className='p-1'>
                <ArticleCard {...article} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Section>
  );
}
