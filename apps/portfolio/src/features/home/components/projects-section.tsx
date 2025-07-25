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
import { Link } from '@repo/ui/components/link';
import { Section } from '@repo/ui/layouts/section';
import * as React from 'react';

interface ProjectsProps {
  items: { label: string; summary: string; cover: string; route: string }[];
  title: string;
}

export const ProjectsSection = ({ items, title }: ProjectsProps) => (
  <Section className='items-center scroll-mt-28 mt-28' id='projects'>
    <Heading className='text-center mb-5' content={title} />
    <Carousel className='w-full max-w-xs'>
      <CarouselContent>
        {items.map(({ label, summary, cover, route }) => (
          <CarouselItem key={label}>
            <Link key={label} route={route} target='_blank' variant='default'>
              <Card className='m-1'>
                <CardContent>
                  <Image
                    alt={`${label} cover`}
                    className='bg-gray-500 block h-36 rounded-[5px]'
                    src={cover}
                  />
                </CardContent>
                <CardHeader>
                  <CardTitle>{label}</CardTitle>
                  <CardDescription>{summary}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </Section>
);
