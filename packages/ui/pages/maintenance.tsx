import {
  loadTranslations,
  type LocalesParams,
} from '@repo/content/estarlincito/locales';
import { Heading } from '@repo/ui/components/heading';
import { Text } from '@repo/ui/components/text';
import { AppThemeProvider } from '@repo/ui/contexts/theme';
import { Container } from '@repo/ui/layouts/container';
import { Flex } from '@repo/ui/layouts/flex';
import { Main } from '@repo/ui/layouts/main';
import { View } from '@repo/ui/layouts/view';
import { cn } from '@repo/ui/lib/utils';

const Maintenance = async ({ params }: LocalesParams) => {
  const { lng } = await params;
  const { maintenance } = await loadTranslations(lng);

  return (
    <html suppressHydrationWarning lang={lng}>
      <body>
        <AppThemeProvider defaultTheme='system'>
          <View variant='child-1'>
            <Main>
              <Container>
                <Flex
                  className={cn(
                    'flex-col',
                    'h-full',
                    'justify-center',
                    'items-center',
                  )}
                >
                  <Heading>🚧 {maintenance.title}</Heading>
                  <Text className='text-3xl'>{maintenance.summary}</Text>
                </Flex>
              </Container>
            </Main>
          </View>
        </AppThemeProvider>
      </body>
    </html>
  );
};

export default Maintenance;
