import { useSidebar } from '@repo/hooks';

import { Box } from '@/components/ui/radix.js';

export const Sidebar = () => {
  const { sidebar } = useSidebar();

  return sidebar ? <Box>....</Box> : null;
};
