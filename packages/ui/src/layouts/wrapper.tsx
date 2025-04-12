import {
  Container,
  type ContainerProps,
  type FlexProps,
} from '@radix-ui/themes';

import { Flex as F } from '@/components/ui/radix.js';
import { withDefaultProps } from '@/hocs/default-props.jsx';

const Flex = withDefaultProps(F, {
  direction: 'column',
  gapY: '5',
  height: '100%',
  justify: 'center',
  p: { initial: '5', md: '0' },
});

interface WrapperProps {
  size?: ContainerProps['size'];
}

export const Wrapper = ({ mb, size, ...props }: WrapperProps & FlexProps) => (
  <Container height='100%' mb={mb ?? '8'} size={size ?? '4'}>
    <Flex {...props} />
  </Container>
);
