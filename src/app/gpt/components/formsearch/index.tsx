import GPT from '@Constants/gpt';
import * as Form from '@radix-ui/react-form';
import {
  DoubleArrowRightIcon,
  MagnifyingGlassIcon,
} from '@radix-ui/react-icons';
import { Box, IconButton, Select, TextField } from '@radix-ui/themes';
import { ChangeEventHandler, FormEventHandler } from 'react';
import Styled from '../../gpt.module.scss';

interface FormsearchProps {
  handleInputChange: ChangeEventHandler<HTMLInputElement> | undefined;
  handleSubmit: FormEventHandler<HTMLFormElement> | undefined;
  input: string;
  isLoading: boolean;
}

const Formsearch = ({
  handleInputChange,
  handleSubmit,
  input,
  isLoading,
}: FormsearchProps) => {
  return (
    <Box className={Styled.box}>
      <Form.Root className={Styled.form} onSubmit={handleSubmit}>
        <Select.Root disabled={isLoading}>
          <Select.Trigger className={Styled.trigger} />
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
          <TextField.Input
            disabled={isLoading}
            onChange={handleInputChange}
            placeholder='Ask any...'
            value={input}
            required
          />
        </TextField.Root>

        <Form.Submit asChild disabled={isLoading}>
          <IconButton variant='outline'>
            <DoubleArrowRightIcon width='16' height='16' />
          </IconButton>
        </Form.Submit>
      </Form.Root>
    </Box>
  );
};

export default Formsearch;
