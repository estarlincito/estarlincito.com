import * as Form from '@radix-ui/react-form';
import { DoubleArrowRightIcon } from '@radix-ui/react-icons';
import { Flex, IconButton, Text, TextArea } from '@radix-ui/themes';
import { ChangeEventHandler, FormEventHandler } from 'react';
import Styled from '../../gpt.module.scss';

interface FormsearchProps {
  handleInputChange: ChangeEventHandler<HTMLTextAreaElement> | undefined;
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
    <Form.Root className={Styled.form} onSubmit={handleSubmit}>
      <Flex direction='row' align='center' justify='between' m='3'>
        <Text>
          <b>Ask any...</b>
        </Text>

        <Form.Submit asChild disabled={isLoading}>
          <IconButton variant='outline'>
            <DoubleArrowRightIcon width='16' height='16' />
          </IconButton>
        </Form.Submit>
      </Flex>

      <TextArea
        placeholder='Write here!'
        disabled={isLoading}
        onChange={handleInputChange}
        value={input}
        required
      />
    </Form.Root>
  );
};

export default Formsearch;
