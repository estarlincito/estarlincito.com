import {
  getTranslations,
  type LocalesParams,
} from '@repo/content/estarlincito/locales';
import { Heading } from '@repo/ui/components/heading';
import { Markdown } from '@repo/ui/components/markdown';
import { Flex } from '@repo/ui/layouts/flex';

const CatchAll = async ({ params }: LocalesParams) => {
  const { lng } = await params;
  const t = await getTranslations(lng);

  return (
    <Flex className='justify-center items-center'>
      <Flex className='max-w-80 flex-col gap-y-2'>
        <Heading content={t('not-found.title')} />

        <Markdown className='text-2xl' content={t('not-found.body')} />
      </Flex>
    </Flex>
  );
};

export default CatchAll;
