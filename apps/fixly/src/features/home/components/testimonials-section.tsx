import { Blockquote } from '@repo/ui/components/blockquote';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@repo/ui/components/card';
import { Heading } from '@repo/ui/components/heading';
import { Gallery } from '@repo/ui/layouts/gallery';
import { Section } from '@repo/ui/layouts/section';
import { cn } from '@repo/ui/lib/utils';
import { getRandomItems } from '@repo/utils/randomItems';

interface TestimonialsProps {
  title: string;
  items: { name: string; message: string }[];
}

export const TestimonialsSection = ({ title, items }: TestimonialsProps) => {
  const randomTestimonials = getRandomItems(items);

  return (
    <Section>
      <Heading as='h3' className='text-center'>
        {title}
      </Heading>
      <Gallery size='5'>
        {randomTestimonials.map(({ message, name }) => (
          <Card
            className={cn(
              'border border-muted rounded-2xl shadow-sm',
              'bg-muted/50 hover:bg-muted transition-all duration-300',
            )}
            key={name}
          >
            <CardContent>
              <CardTitle className='text-lg tracking-tight'>{name}</CardTitle>
              <CardDescription>
                <Blockquote className='text-muted-foreground text-lg leading-relaxed'>
                  &quot;{message}&quot;
                </Blockquote>
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </Gallery>
    </Section>
  );
};
