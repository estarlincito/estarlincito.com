import { quotely } from '@repo/constants';
import { Badge, Flex, Link } from '@repo/ui';
import type { z } from 'zod';

import type { returnSchema } from '@/schema/quotes/return';

const Tags = ({
  tags,
}: {
  tags: z.infer<typeof returnSchema.quote>['tags'];
}) => (
  <Flex gapX='1'>
    {tags.map(({ name, id }) => (
      <Badge color='gray' key={id} radius='medium'>
        <Link
          color='gray'
          href={`${quotely.tags.path}/${name}`}
          underline='none'
        >
          {name}
        </Link>
      </Badge>
    ))}
  </Flex>
);

export default Tags;
