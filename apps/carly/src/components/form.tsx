import * as Form from '@radix-ui/react-form';
import { DoubleArrowRightIcon, InfoCircledIcon } from '@radix-ui/react-icons';
import { Box, Flex, IconButton } from '@radix-ui/themes';
import stylez from '@stylezjs/stylez';
import React, {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useRef,
} from 'react';

const styles = {
  form: stylez.create({
    backgroundColor: 'var(--gray-3)',
    borderRadius: '30px',
  }),

  message: stylez.create({
    color: 'red',
    fontSize: '13px',
    marginLeft: '10px',
    opacity: '0.8',
  }),
  textarea: stylez.create({
    all: 'unset',
    height: '50px',
    width: '100%',
  }),
};

interface Props {
  handleInputChange: ChangeEventHandler<HTMLTextAreaElement> | undefined;
  handleSubmit: FormEventHandler<HTMLFormElement> | undefined;
  input: string;
  isLoading: boolean;
}

const CarlyForm: React.FC<Props> = (props) => {
  const { handleSubmit, isLoading, handleInputChange, input } = props;
  const smooth = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (!smooth.current) return;
    if (smooth.current.scrollHeight >= 200) return;
    if (input.length === 0) {
      smooth.current.style.height = `50px`;
    }
    if (smooth.current) {
      smooth.current.style.height = `${smooth.current.scrollHeight}px`;
    }
  }, [input]);

  return (
    <Box {...stylez.className(styles.form)} p='5' asChild>
      <Form.Root onSubmit={handleSubmit}>
        <Form.Field name='message'>
          <Form.Message
            {...stylez.className(styles.message)}
            match='valueMissing'
          >
            <Flex align='center' gapX='1'>
              <InfoCircledIcon />
              Please write your message
            </Flex>
          </Form.Message>

          <Form.Message
            {...stylez.className(styles.message)}
            match='typeMismatch'
          >
            <Flex align='center' gapX='1'>
              <InfoCircledIcon />
              Please provide a valid message
            </Flex>
          </Form.Message>
          <Form.Control asChild>
            <textarea
              {...stylez.className(styles.textarea)}
              ref={smooth}
              required
              name='message'
              maxLength={1000}
              minLength={1}
              placeholder='Message Carly'
              disabled={isLoading}
              onChange={handleInputChange}
              value={input}
            />
          </Form.Control>

          <Flex justify='between' mt='5'>
            <Box></Box>
            <Form.Submit asChild disabled={input.length === 0 || isLoading}>
              <IconButton variant='ghost'>
                <DoubleArrowRightIcon width='30' height='30' />
              </IconButton>
            </Form.Submit>
          </Flex>
        </Form.Field>
      </Form.Root>
    </Box>
  );
};

export default CarlyForm;
