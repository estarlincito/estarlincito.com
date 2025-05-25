import { SECTIONS } from '@app/portfolio/constants/home';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@repo/ui/components/carousel';
import { Heading } from '@repo/ui/components/heading';
import { Image } from '@repo/ui/components/image';
import { Section } from '@repo/ui/layouts/section';
import * as React from 'react';

export const Projects = () => (
  <Section className='items-center scroll-mt-28 mt-28' id='projects'>
    <Heading className='text-center mb-5' content={SECTIONS.PROJECTS.title} />
    <Carousel className='w-full max-w-xs'>
      <CarouselContent>
        {SECTIONS.PROJECTS.items.map(({ title, summary, cover, route }) => (
          <CarouselItem key={title}>
            <a href={route} key={title} rel='noreferrer' target='_blank'>
              <Card className='m-1'>
                <CardContent className='h-36'>
                  <Image
                    alt={`${title} cover`}
                    className='bg-gray-500 block h-36 rounded-[5px]'
                    src={cover}
                  />
                </CardContent>
                <CardHeader className='h-25'>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{summary}</CardDescription>
                </CardHeader>
              </Card>
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </Section>
);
