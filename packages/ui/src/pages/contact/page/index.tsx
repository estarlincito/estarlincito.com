import { Container, Wrapper } from '../../../layouts/index.js';
import ContactForm from './form.js';

export const ContactPage = () => {
  return (
    <Container size='4'>
      <Wrapper align='center'>
        <ContactForm />
      </Wrapper>
    </Container>
  );
};
