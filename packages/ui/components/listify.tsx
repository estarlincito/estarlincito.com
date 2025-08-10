/* eslint-disable react/no-array-index-key */

'use client';
import { zodResolver } from '@hookform/resolvers/zod';
// import { Button } from '@repo/ui/components//button';
import { Box } from '@repo/ui/components/box';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from '@repo/ui/components/form';
import { Input } from '@repo/ui/components/input';
import { ScrollArea } from '@repo/ui/components/scroll-area';
import { Flex } from '@repo/ui/layouts/flex';
// import { PlusCircleIcon } from 'lucide-react';
import {
  type ComponentProps,
  type Dispatch,
  type SetStateAction,
  useRef,
  useState,
} from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod/v4';

interface ListifyProps extends ComponentProps<'input'> {
  placeholder?: string;
  value: string[];
  setValue: Dispatch<SetStateAction<string[]>>;
}

const Listify = ({ value, setValue, ...rest }: ListifyProps) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const FieldSchema = z.object({ item: z.string().nonempty() });
  type Field = z.infer<typeof FieldSchema>;

  const form = useForm<Field>({
    defaultValues: { item: '' },
    resolver: zodResolver(FieldSchema),
  });

  const onSubmit = async ({ item }: Field) => {
    setValue((prev) => (prev.includes(item) ? prev : [...prev, item]));
    form.reset();
    setTimeout(
      () => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }),
      0,
    );
  };

  return (
    <Flex className='flex-col p-5 border rounded-md'>
      <ScrollArea>
        <ul className='list-disc pl-5 max-h-72'>
          {value.map((item, key) => (
            <li key={`listify-item-${key}`}>{item}</li>
          ))}
          <div ref={bottomRef} />
        </ul>
      </ScrollArea>
      <Form {...form}>
        <Box>
          <FormField
            control={form.control}
            name='item'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    {...rest}
                    onKeyDown={async (e) => {
                      if (e.key === 'Enter') {
                        await form.handleSubmit(onSubmit)();
                        e.preventDefault();
                      }
                    }}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </Box>

        {/* <Button variant='ghost' onClick={form.handleSubmit(onSubmit)}>
          <PlusCircleIcon />
        </Button> */}
      </Form>
    </Flex>
  );
};

const useListify = (
  init: string[],
): [string[], Dispatch<SetStateAction<string[]>>] => {
  const [value, setValue] = useState<string[]>(init);

  return [value, setValue];
};

export { Listify, type ListifyProps, useListify };
