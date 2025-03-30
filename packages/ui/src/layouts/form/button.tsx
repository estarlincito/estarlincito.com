import * as Form from '@radix-ui/react-form';
import { Button as RadixButton } from '@radix-ui/themes';

interface Props {
  disabled?: boolean;
  label: string;
}

const Button = ({ disabled, label }: Props) => {
  return (
    <Form.Submit asChild>
      <RadixButton
        size='4'
        variant='soft'
        disabled={disabled}
        className='--cursor-button'
      >
        {label}
      </RadixButton>
    </Form.Submit>
  );
};

export default Button;
