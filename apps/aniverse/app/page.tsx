import { METADATA } from '@app/aniverse/constants/home';
import { GenerateMetadata } from '@estarlincito/utils';
import { Box } from '@repo/ui/components/box';

export const metadata = GenerateMetadata.website(METADATA);

const Page = () => <Box>Hello AniVerse</Box>;

export default Page;
