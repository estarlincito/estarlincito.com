import { Avatar, Flex, Link, Separator, Text } from '@/components/ui/index.js';

export interface BrandProps {
  url: string;
  siteName: string;
  logo: string;
}

export const Brand = ({ url, siteName, logo }: BrandProps) => (
  <Flex asChild align='center'>
    <Link highContrast color='gray' href='/' underline='none' weight='bold'>
      <Avatar fallback='Logo' size='2' src={url + logo} />
      <Text as='span'>{siteName}</Text>
      <Separator ml='2' orientation='vertical' size='4' />
    </Link>
  </Flex>
);
