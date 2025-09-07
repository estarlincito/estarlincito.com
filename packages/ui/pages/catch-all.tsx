import {
  getTranslations,
  type LocalesParams,
} from '@repo/content/shared/locales';
import { Heading } from '@repo/ui/components/heading';
import { Markdown } from '@repo/ui/components/markdown';
import { Flex } from '@repo/ui/layouts/flex';
import { pickLng } from '@repo/utils/lng';

const CatchAll = async ({ params }: LocalesParams) => {
  const lng = await pickLng(params);
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
