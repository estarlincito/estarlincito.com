import { Badge, Flex, Link } from '@radix-ui/themes';
import { quotely } from '@repo/constants';
import type { z } from 'zod';

import type { returnSchema } from '@/schemas/quotes/return';

const Tags = ({
  tags,
}: {
  tags: z.infer<typeof returnSchema.quote>['tags'];
}) => {
  return (
    <Flex gapX='1'>
      {tags.map(({ name }, id) => (
        <Badge color='gray' key={id} radius='medium'>
          <Link
            underline='none'
            href={`${quotely.tags.path}/${name}`}
            color='gray'
          >
            {name}
          </Link>
        </Badge>
      ))}
    </Flex>
  );
};

export default Tags;
