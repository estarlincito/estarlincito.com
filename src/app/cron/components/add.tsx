'use client';
import useCron from '@/Hooks/useCron';
import Form from '@/components/UI/form';
import Button from '@/components/UI/form/button';
import Input from '@/components/UI/form/input';
import Label from '@/components/UI/form/label';
import Textarea from '@/components/UI/form/textarea';

const Add = () => {
  const { handleAction } = useCron();

  return (
    <Form action={handleAction} title='Add new Timer'>
      <Label title='Title' />
      <Input type='text' name='title' placeholder='Type your title' required />

      <Label title='Timer' />
      <Input
        type='number'
        name='timer'
        placeholder='Type your minutes'
        required
      />

      <Label title='Message' />
      <Textarea name='message' placeholder='Type your message' required />

      <Label title='Email' />
      <Input type='email' name='email' placeholder='Type your email' required />

      <Button type='submit' title='Add' />
    </Form>
  );
};

export default Add;
