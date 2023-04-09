import { _Link, Blockquote, Title, Paragraph } from '@/components/HOC';
import { _Main, Wrapper } from '@/components/UI/organisms';
import { Metadata } from 'next';

//SEO
export const metadata: Metadata = {
  title: 'Contacto | Estarlincito',
  description: 'Desarrollador Web, escritor y creador.',
};

const ContactPage = () => {
  return (
    <_Main>
      <Wrapper>
        <section>
          <Title className='text-3xl'>Ponte en contacto conmigo</Title>
          <Blockquote className='mb-5'>¡Construyamos algo juntos!</Blockquote>

          <Paragraph className='my-5 py'>
            Si está buscando ayuda para construir algo que tenga un impacto y
            sostenibilidad, hablemos&nbsp;
            <span role='img' aria-label='Levantando las manos'>
              🙌
            </span>
          </Paragraph>

          <Paragraph>
            Envíame un correo electrónico a:
            <br />
            <_Link href='mailto:contacto@estarlincito.com' target='_self'>
              contacto@estarlincito.com
            </_Link>
          </Paragraph>

          <Paragraph className='my-5'>
            Siempre estoy aprendiendo y explorando. Con mi experiencia como
            Diseñador web, puedo ayudarte a materializar tus ideas innovadoras
            con Información, análisis y monitoreo tecnológico completos.
          </Paragraph>

          <Paragraph className='my-5'>
            En general, mi trabajo se centra en la consulta, la innovación,
            solución de problemas tecnológicos y la educación:
          </Paragraph>

          <ul>
            <li>- Diseñador Web</li>
            <li>- Soporte Técnico</li>
            <li>- Hacker Ético</li>
            <li>- Educador Tecnológico</li>
          </ul>

          <Paragraph className='italic my-5'>
            Si solo quieres saludar, Hazme un&nbsp;
            <_Link href='https://twitter.com/estarlincito' target='_blank'>
              Tweet!
            </_Link>
          </Paragraph>
        </section>
      </Wrapper>
    </_Main>
  );
};

export default ContactPage;
