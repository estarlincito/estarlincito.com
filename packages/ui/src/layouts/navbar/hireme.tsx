import {
  ChatBubbleIcon,
  GitHubLogoIcon,
  HeartFilledIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import type { IconButtonProps } from '@radix-ui/themes';

import { Link } from '@/components/index.js';
import { Flex, IconButton } from '@/components/ui/radix.js';

export interface HiremeProps {
  hireme: {
    route: string;
    label: string;
    key: number;
  }[];
}

export const Hireme = ({ hireme }: HiremeProps) => (
  // const sortedHireme = [...hireme].sort((a, b) => {
  //   const hasIcon = (label: string) => label === 'x' || label === 'github';
  //   if (hasIcon(a.label) === hasIcon(b.label)) {
  //     return num('0');
  //   } else if (hasIcon(a.label)) {
  //     return num('1');
  //   }
  //   return num('-1');
  // });

  <Flex align='center' gapX='2'>
    {hireme.map(({ key, label, route }) => {
      let icon = null;
      let color: IconButtonProps['color'] = 'gray';

      if (label === 'x') {
        icon = <TwitterLogoIcon />;
        color = 'blue';
      } else if (label === 'github') {
        icon = <GitHubLogoIcon />;
      } else if (label === 'contact') {
        icon = <ChatBubbleIcon />;
        color = 'indigo';
      } else if (label === 'ko-fi') {
        icon = <HeartFilledIcon />;
        color = 'red';
      }

      return icon ? (
        <Link href={route} key={key}>
          <IconButton color={color} size='1' variant='soft'>
            {icon}
          </IconButton>
        </Link>
      ) : (
        <Link color={color} href={route} key={key}>
          {label}
        </Link>
      );
    })}
  </Flex>
);
