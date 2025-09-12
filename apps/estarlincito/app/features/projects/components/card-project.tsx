import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card';
import { Image } from '@repo/ui/components/image';
import { Link } from '@repo/ui/components/link';

interface Props {
  title: string;
  summary: string;
  cover: string;
  route: string;
}

export const CardProject = ({ title, summary, cover, route }: Props) => (
  <Link route={route} variant='default'>
    <Card>
      <CardContent className='h-40'>
        <Image
          alt={`${title} cover`}
          className='bg-gray-500 block rounded-[5px]'
          src={cover}
        />
      </CardContent>
      <CardHeader className='h-20'>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {summary.length > 90 ? `${summary.slice(0, 90)}...` : summary}
        </CardDescription>
      </CardHeader>
    </Card>
  </Link>
);
