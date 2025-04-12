'use client';
import { num } from '@estarlincito/utils';
import { DesktopIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
// eslint-disable-next-line no-restricted-imports
import { type IconProps } from '@radix-ui/themes';
import { useIsClient } from '@repo/hooks';
import { Flex, SegmentedControl } from '@repo/ui';
import { useTheme } from 'next-themes';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

interface Props {
  value: 'light' | 'dark' | 'system';
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
}
const Item = ({ value, Icon }: Props) => {
  const firs = value[num('0')] as string;

  return (
    <SegmentedControl.Item value={value}>
      <Flex align='center' gap='1'>
        <Icon />
        {value.replace(firs, firs.toUpperCase())}
      </Flex>
    </SegmentedControl.Item>
  );
};
const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();
  const isClient = useIsClient();
  if (!isClient) return null;

  return (
    <SegmentedControl.Root
      defaultValue={theme}
      radius='small'
      onValueChange={(value) => {
        setTheme(value);
      }}
    >
      <Item Icon={SunIcon} value='light' />
      <Item Icon={DesktopIcon} value='system' />
      <Item Icon={MoonIcon} value='dark' />
    </SegmentedControl.Root>
  );
};

export default ThemeToggle;
