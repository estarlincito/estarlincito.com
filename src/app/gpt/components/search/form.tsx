'use client';
import useGPT from '@/Hooks/useGPT';
import GPT from '@Constants/gpt';
import * as Form from '@radix-ui/react-form';
import {
  DoubleArrowRightIcon,
  MagnifyingGlassIcon,
} from '@radix-ui/react-icons';
import { IconButton, Select, TextField } from '@radix-ui/themes';
import Styled from './search.module.scss';

const Formsearch = () => {
  const { handleAction, reset } = useGPT();
  return (
    <Form.Root className={Styled.form} action={handleAction} ref={reset}>
      <Select.Root name='type'>
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

      <Form.Submit asChild>
        <IconButton variant='outline'>
          <DoubleArrowRightIcon width='16' height='16' />
        </IconButton>
      </Form.Submit>
    </Form.Root>
  );
};

export default Formsearch;
