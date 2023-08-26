'use client';
import useGPT from '@/Hooks/useGPT';
import GPT from '@Constants/gpt';
import {
  DoubleArrowRightIcon,
  MagnifyingGlassIcon,
} from '@radix-ui/react-icons';
import { IconButton, Select, TextField } from '@radix-ui/themes';
import Styled from './search.module.scss';

const Formsearch = () => {
  const { handleAction, reset } = useGPT();
  return (
    <form action={handleAction} ref={reset} className={Styled.form}>
      <Select.Root defaultValue='none' name='type'>
        <Select.Trigger />
        <Select.Content>
          {GPT.options.map(({ value, label }, id) => (
            <Select.Item key={id} value={value}>
              {label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>

      <TextField.Root>
        <TextField.Slot>
          <MagnifyingGlassIcon height='16' width='16' />
        </TextField.Slot>
        <TextField.Input name='search' placeholder='Ask any...' required />
      </TextField.Root>

      <IconButton variant='outline'>
        <DoubleArrowRightIcon width='16' height='16' />
      </IconButton>
    </form>
  );
};

export default Formsearch;
